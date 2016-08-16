require 'rails_helper'

RSpec.describe Api::V1::DevelopersController, type: :controller do
	describe '#index' do
    context "with per_page and page params" do
      it 'responds with paginated records' do
        expect(DevelopersRepo).to receive(:new).and_return(
          repo = double(:developers_repo, count: 51)
        )
        expect(repo).to receive(:load_page).with(per_page: 10, page: 5).and_return(
          [
            Developer.new(
              snapchat_username: 'test_username',
              full_name: 'test user',
              about: 'test about',
              snapcode_image: '<snapcode_image />'
            ),
            Developer.new(
              snapchat_username: 'test_username2',
              full_name: 'test user',
              about: 'test about',
              snapcode_image: '<snapcode_image />'
            )
          ]
        )
        get :index, params: { per_page: 10, page: 5 }
        expect(response).to have_http_status(200)
        json = JSON.parse(response.body)
        expect(json['data'].size).to eq 2
        expect(json['data'][0]['id']).to                           eq 'test_username'
        expect(json['data'][0]['attributes']['full-name']).to      eq 'test user'
        expect(json['data'][0]['attributes']['about']).to          eq 'test about'
        expect(json['data'][0]['attributes']['snapcode-image']).to eq '<snapcode_image />'
        expect(json['data'][1]['id']).to                           eq 'test_username2'
        expect(json['meta']['total-count']).to                  eq 51
        expect(json['meta']['total-pages']).to                  eq 6
      end
    end

    context "without per_page and page params" do
      it 'responds with first record' do
        expect(DevelopersRepo).to receive(:new).and_return(
          repo = double(:developers_repo, count: 51)
        )
        expect(repo).to receive(:load_page).with(per_page: 1, page: 1).and_return(
          [
            Developer.new(
              snapchat_username: 'test_username',
              full_name: 'test user',
              about: 'test about',
              snapcode_image: '<snapcode_image />'
            )
          ]
        )
        get :index
        expect(response).to have_http_status(200)
        json = JSON.parse(response.body)
        expect(json['data'].size).to eq 1
        expect(json['data'][0]['id']).to                           eq 'test_username'
        expect(json['data'][0]['attributes']['full-name']).to      eq 'test user'
        expect(json['data'][0]['attributes']['about']).to          eq 'test about'
        expect(json['data'][0]['attributes']['snapcode-image']).to eq '<snapcode_image />'
        expect(json['meta']['total-count']).to                  eq 51
        expect(json['meta']['total-pages']).to                  eq 51
      end
    end
  end

  describe '#create' do
    let(:valid_params) do
      {
        data: {
          id: 'test_username',
          attributes: {
            'full-name' => "",
            'about'     => "test about"
          }
        }
      }
    end
    context 'when all params are valid' do
      it 'responds with 204 status code' do
        expect(DevelopersRepo).to receive(:new).and_return(
          repo = double(:developers_repo)
        )
        expect(AddDeveloperToList).to receive(:new).with(repo).and_return(
          service = double(:add_developer_to_list, call: {})
        )
        post :create, params: {
          data: {
            id: 'test_username',
            attributes: {
              'full-name' => "test fullname",
              'about'     => "test about"
            }
          }
        }
        expect(response).to have_http_status(204)
      end
    end
    def mock_add_developer_to_list_service
      expect(DevelopersRepo).to receive(:new).and_return(
        repo = double(:developers_repo)
      )
      expect(AddDeveloperToList).to receive(:new).with(repo).and_return(
        service = double(:add_developer_to_list)
      )
      service
    end
    context 'when attributes are invalid' do
      it 'responds with 422 status code' do
        service = mock_add_developer_to_list_service
        allow(service).to receive(:call).and_raise(AddDeveloperToList::InvalidParams.new({}))
        post :create, params: valid_params
        expect(response).to have_http_status(422)
      end
    end
    context 'when fetching Snapcode failed' do
      it 'responds with 500 status code' do
        service = mock_add_developer_to_list_service
        allow(service).to receive(:call).and_raise(
          AddDeveloperToList::FetchingSnapcodeFromExternalApiFailed
        )
        post :create, params: valid_params
        expect(response).to have_http_status(500)
      end
    end
    context 'when snapchat username is not unique' do
      it 'responds with 422 status code' do
        service = mock_add_developer_to_list_service
        allow(service).to receive(:call).and_raise(AddDeveloperToList::SnapchatUsernameNotUnique)
        post :create, params: valid_params
        expect(response).to have_http_status(422)
      end
    end
    context 'when id is missing' do
      it 'responds with 422 status code' do
        post :create, params: {
          data: {
            attributes: {
              'full-name' => "test fullname",
              'about'     => "test about"
            }
          }
        }
        expect(response).to have_http_status(422)
      end
    end
    context 'when data is missing' do
      it 'responds with 422 status code' do
        post :create, params: {}
        expect(response).to have_http_status(422)
      end
    end
    context 'when attributes are missing' do
      it 'responds with 422 status code' do
        post :create, params: {
          data: {
            id: 'test_username'
          }
        }
        expect(response).to have_http_status(422)
      end
    end
  end

  describe '#show' do
    context "when id is correct" do
      it 'responds with the specific record' do
        expect(DevelopersRepo).to receive(:new).and_return(
          repo = double(:developers_repo)
        )
        expect(repo).to receive(:find_by).with({ snapchat_username: 'test_username' }).and_return(
          Developer.new(
            snapchat_username: 'test_username',
            full_name: 'test user',
            about: 'test about',
            snapcode_image: '<snapcode_image />'
          )
        )
        get :show, params: { id: 'test_username' }
        expect(response).to have_http_status(200)
        json = JSON.parse(response.body)
        expect(json['data']['id']).to                           eq 'test_username'
        expect(json['data']['attributes']['full-name']).to      eq 'test user'
        expect(json['data']['attributes']['about']).to          eq 'test about'
        expect(json['data']['attributes']['snapcode-image']).to eq '<snapcode_image />'
        expect(json['data']['attributes']['snapcode-image']).to eq '<snapcode_image />'
      end
    end
    context "when id is not correct" do
      it 'responds with an error' do
        expect(DevelopersRepo).to receive(:new).and_return(
          repo = double(:developers_repo)
        )
        expect(repo).to receive(:find_by).with({ snapchat_username: 'wrong_username' }).and_raise(
          DevelopersRepo::RecordNotFound
        )
        get :show, params: { id: 'wrong_username' }
        expect(response).to have_http_status(404)
        json = JSON.parse(response.body)
        expect(json['errors'][0]['title']).to eq 'Record not found'
      end
    end
  end
end

require 'rails_helper'

RSpec.describe AddDeveloperToList do
  let(:in_memory_repo) { InMemoryDevelopersRepo.new }
  let(:valid_form) do
    AddDeveloperToListForm.new(
      snapchat_username: 'test_user',
      full_name: 'test full name',
      about: 'test about'
    )
  end
  let(:invalid_form) do
    AddDeveloperToListForm.new
  end

  def mock_get_snapcode_image_from_external_api_service
    expect(GetSnapcodeImageFromExternalApi).to receive(:new).and_return(
      get_snapcode_service = double(:get_snapcode_image_from_external_api)
    )
    expect(get_snapcode_service).to receive(:call).with(valid_form.snapchat_username).and_return(
      "<fake_snapcode />"
    )
  end

  describe "#call" do
    context "when form is valid" do
      it "creates new developer" do
        mock_get_snapcode_image_from_external_api_service
        developer = AddDeveloperToList.new(in_memory_repo).call(valid_form)
        expect(developer.snapchat_username).to eq valid_form.snapchat_username
        expect(developer.full_name).to eq valid_form.full_name
        expect(developer.about).to eq valid_form.about
        expect(developer.snapcode_image).to eq "<fake_snapcode />"
      end
    end
    context "when form is invalid" do
      it "raises an exception" do
        expect do
          AddDeveloperToList.new(in_memory_repo).call(invalid_form)
        end.to raise_error described_class::InvalidParams
      end
    end
    context "when fetching snapcode failed" do
      it "raises an exception" do
        expect(GetSnapcodeImageFromExternalApi).to receive(:new).and_return(
          get_snapcode_service = double(:get_snapcode_image_from_external_api)
        )
        expect(get_snapcode_service)
          .to receive(:call)
          .with(valid_form.snapchat_username)
          .and_raise GetSnapcodeImageFromExternalApi::FetchingFailed

        expect do
          AddDeveloperToList.new(in_memory_repo).call(valid_form)
        end.to raise_error described_class::FetchingSnapcodeFromExternalApiFailed
      end
    end
    context "when id is not unique" do
      it "raises an exception" do
        mock_get_snapcode_image_from_external_api_service
        in_memory_repo.create(valid_form, "<fake_snapcode />")
        expect do
          AddDeveloperToList.new(in_memory_repo).call(valid_form)
        end.to raise_error described_class::SnapchatUsernameNotUnique
      end
    end
  end
end

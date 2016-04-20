require "rails_helper"

RSpec.describe DevelopersController, type: :controller do
	describe "developers#index" do
		it "responds with a successfull OK code" do
			get :index
			expect(response).to be_success
			expect(response).to have_http_status(200)
		end

		it "renders with index template" do
			get :index
			expect(response).to render_template "index"
		end

		it "loads all developers" do
			first_dev = Developer.create!(snapchat_username: "first_dev", full_name: "First Dev", about: "About first dev")
			second_dev = Developer.create!(snapchat_username: "second_dev", full_name: "Second Dev", about: "About second dev")
			get :index
			expect(assigns(:developers)).to match_array([first_dev, second_dev])
		end
	end

	describe "developers#new" do
		it "successfully runs the new action" do
			get :new
			expect(response).to be_success
		end

		it "renders the new template" do
			get :new
			expect(response).to render_template "new"
		end
	end

end
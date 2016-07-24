module Api
  module V1
    class DevelopersController < BaseController
      def index
        developers_count = repo.count
        render json: repo.load_page(page: page, per_page: per_page),
          meta: {
            total_count: developers_count,
            total_pages: (developers_count.to_f / per_page).ceil
          }
      end

      def create
        form = AddDeveloperToListForm.new(developer_params)
        AddDeveloperToList.new(repo).call(form)
        head :no_content
      rescue AddDeveloperToList::InvalidParams => exc
        render_errors(exc.errors, :unprocessable_entity)
      rescue AddDeveloperToList::FetchingSnapcodeFromExternalApiFailed
        render_error('Fetching Snapcode failed. Please try again.', :internal_server_error)
      rescue AddDeveloperToList::SnapchatUsernameNotUnique
        render_error(
          'This snapchat username is already on the list.',
          :unprocessable_entity,
          { id: 'snapchat-username' }
        )
      rescue ActionController::ParameterMissing => e
        render_error(e.message, :unprocessable_entity)
      end

      def show
        developer = repo.find_by(snapchat_username: params[:id])
        render json: developer, serializer: DeveloperSerializer
      rescue DevelopersRepo::RecordNotFound
        render_error('Record not found', :not_found)
      end

      private

      def developer_params
        data_attributes.merge(snapchat_username: params_id)
      end

      def repo
        @developers_repo ||= DevelopersRepo.new
      end

      def page
        params[:page].to_i >= 1 ? params[:page].to_i : 1
      end

      def per_page
        (1..20).include?(params[:per_page].to_i) ? params[:per_page].to_i : 1
      end
    end
  end
end

module Api
  module V1
    class BaseController < ::ActionController::Base
      def render_errors(errors, code)
        render json: { errors: ErrorsSerializer.serialize(errors) }, status: code
      end

      def render_error(error, code, options={})
        render json: { errors: [{ title: error }.merge(options)] }, status: code
      end
    end
  end
end


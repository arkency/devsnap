module Api
  module V1
    class BaseController < ::ActionController::Base
      def data_attributes
        params
          .require(:data)
          .require(:attributes)
          .transform_keys { |key| key.underscore }
      end

      def params_id
        params.require(:data).require(:id)
      end

      def render_errors(errors, code)
        render json: { errors: ErrorsSerializer.serialize(errors) }, status: code
      end

      def render_error(error, code, options={})
        render json: { errors: [{ title: error }.merge(options)] }, status: code
      end
    end
  end
end


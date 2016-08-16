class JsonApiFormFactory
  InvalidPayload = Class.new(StandardError)

  def self.build(form_klass, params)
    form_klass.new(
      ActiveModelSerializers::Deserialization.jsonapi_parse!(
        params.with_indifferent_access
      )
    )
  rescue ActiveModelSerializers::Adapter::JsonApi::Deserialization::InvalidDocument
    raise InvalidPayload
  end
end

class JsonApiFormFactory
  InvalidDataStructure = Class.new(StandardError)

  def self.build(form_klass, params)
    form_klass.new(
      params
        .fetch(:data).fetch(:attributes)
        .transform_keys { |key| key.to_s.underscore }
        .merge(id: params.dig(:data, :id))
        .with_indifferent_access
    )
  rescue KeyError => e
    raise InvalidDataStructure.new(e.message)
  end
end

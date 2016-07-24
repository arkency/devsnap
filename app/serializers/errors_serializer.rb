module ErrorsSerializer
  def serialize(errors)
    errors.to_h.map do |k, v|
      v.map do |msg|
        { id: k, title: msg }
      end
    end.flatten
  end
  module_function :serialize
end

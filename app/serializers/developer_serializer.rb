class DeveloperSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :about, :created_at, :updated_at, :snapcode_image

  def id
    object.snapchat_username
  end
end

class DevelopersRepo
  SnapchatUsernameNotUnique = Class.new(StandardError)
  RecordNotFound = Class.new(StandardError)

  def create(params, snapcode_image)
    params = params.to_h
    raise SnapchatUsernameNotUnique if Developer.exists?(snapchat_username: params[:snapchat_username])
    Developer.create!(params.merge(snapcode_image: snapcode_image))
  end

  def find(id)
    Developer.find(id)
  rescue ActiveRecord::RecordNotFound
    raise RecordNotFound
  end

  def find_by(query)
    Developer.find_by!(query)
  rescue ActiveRecord::RecordNotFound
    raise RecordNotFound
  end

  def load_all
    Developer.all.order(created_at: :asc)
  end

  def load_page(page: 1, per_page: 15)
    Developer.offset((page.to_i-1) * per_page.to_i).limit(per_page.to_i).order(created_at: :asc)
  end

  def count
    Developer.count
  end
end

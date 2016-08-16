class InMemoryDevelopersRepo
  SnapchatUsernameNotUnique = Class.new(StandardError)
  RecordNotFound = Class.new(StandardError)

  def initialize
    @developers = []
  end

  def create(params, snapcode_image)
    params = params.to_h
    raise SnapchatUsernameNotUnique if get_record_by(snapchat_username: params[:snapchat_username])
    Developer.new(params.merge(snapcode_image: snapcode_image)).tap do |developer|
      @developers << developer
    end
  end

  def find(id)
    @developers.detect { |d| d.id == id } or raise RecordNotFound
  end

  def find_by(query)
    get_record_by(query) or raise RecordNotFound
  end

  def load_all
    @developers
  end

  def load_page(page: 1, per_page: 15)
    offset = (page.to_i-1) * per_page.to_i
    @developers[offset, per_page.to_i]
  end

  def count
    @developers.size
  end

  private

  def get_record_by(query)
    @developers.detect { |d| d.send(query.keys.first) == query.values.first }
  end
end

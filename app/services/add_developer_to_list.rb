class AddDeveloperToList
  class InvalidParams < StandardError
    def initialize(errors)
      @errors = errors
      super('InvalidParams')
    end
    attr_reader :errors
  end

  FetchingSnapcodeFromExternalApiFailed = Class.new(StandardError)
  SnapchatUsernameNotUnique             = Class.new(StandardError)

  def initialize(repo)
    @repo = repo
  end

  def call(form)
    form.valid? or raise InvalidParams.new(form.errors.messages)
    snapcode_image = GetSnapcodeImageFromExternalApi.new.call(form.snapchat_username)
    repo.create(form, snapcode_image)
  rescue GetSnapcodeImageFromExternalApi::FetchingFailed
    raise FetchingSnapcodeFromExternalApiFailed
  rescue repo.class::SnapchatUsernameNotUnique
    raise SnapchatUsernameNotUnique
  end

  private

  attr_reader :repo
end

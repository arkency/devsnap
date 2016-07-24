class AddDeveloperToListForm
  include ActiveModel::Model

  attr_accessor :snapchat_username, :full_name, :about

  validates :snapchat_username, :full_name, :about, presence: true

  def initialize(params = {})
    @snapchat_username = params[:snapchat_username]
    @full_name         = params[:full_name]
    @about             = params[:about]
  end

  def to_h
    {
      snapchat_username: @snapchat_username,
      full_name:         @full_name,
      about:             @about
    }
  end
end

class Developer < ApplicationRecord
	before_save :get_svg_image

  validates :snapchat_username, :full_name, :about, presence: true
  validates :snapchat_username, uniqueness: { message: "is already in this directory."}
  scope :from_newest, -> { order('created_at DESC') }

  private

  def get_svg_image
		self.snapcode_image = SnapchatSvgService.get_svg_image("#{ self.snapchat_username }")
	end
end

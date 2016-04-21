
require_relative '../services/snapchat_svg_service'
class Developer < ApplicationRecord
	include SnapchatSvgService
	before_save :get_svg_image

  validates :snapchat_username, :full_name, :about, presence: true
  validates :snapchat_username, uniqueness: { message: "is already in this directory."}
  scope :from_newest, -> { order('created_at DESC') }

  private

  def get_svg_image
		svg = SnapchatSvgService.get_svg_image("#{ self.snapchat_username }")
		self.snapcode_image = svg
	end
end

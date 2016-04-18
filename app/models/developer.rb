require 'nokogiri'
require 'open-uri'

class Developer < ApplicationRecord
	before_save :get_svg

  validates :snapchat_username, :full_name, :about, presence: true
  validates :snapchat_username, uniqueness: { message: "is already in this directory."}
  scope :from_newest, -> { order('created_at DESC') }

  private
	def get_svg
		image = Nokogiri::XML open("https://feelinsonice-hrd.appspot.com/web/deeplink/snapcode?username=#{ self.snapchat_username }&type=SVG")
		self.snapcode_image = image.to_html
	end
end

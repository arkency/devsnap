require 'nokogiri'
require 'open-uri'

class Developer < ApplicationRecord
	before_save :svg_image

  validates :snapchat_username, :full_name, :about, presence: true
  validates :snapchat_username, uniqueness: { message: "is already in this directory."}
  scope :from_newest, -> { order('created_at DESC') }

  def get_svg_image(url)
		image = Nokogiri::XML open(url)
		self.snapcode_image = image.to_html
	end

  private
	def svg_image
		self.get_svg_image("https://feelinsonice-hrd.appspot.com/web/deeplink/snapcode?username=#{ self.snapchat_username }&type=SVG")
	end
end

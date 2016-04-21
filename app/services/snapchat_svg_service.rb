require 'nokogiri'
require 'open-uri'

BASE_URL = "https://feelinsonice-hrd.appspot.com/web/deeplink/snapcode?username=snapusername&type=SVG"

module SnapchatSvgService
	def get_svg_image(username)
		image = Nokogiri::XML open(BASE_URL.gsub(/snapusername/, 'username'))
		image.to_html
	end
end
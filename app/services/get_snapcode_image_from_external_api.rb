require 'nokogiri'
require 'open-uri'

class GetSnapcodeImageFromExternalApi
  FetchingFailed = Class.new(StandardError)

  def call(snapchat_username)
    image = Nokogiri::XML(open(api_url_for_image(snapchat_username)))
    image.to_html
  rescue OpenURI::HTTPError
    raise FetchingFailed
  end

  private

  def api_url_for_image(username)
    "https://feelinsonice-hrd.appspot.com/web/deeplink/snapcode?username=#{username}&type=SVG"
  end
end

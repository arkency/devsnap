namespace :set_snapcode_image do
	desc "Downloads snapcode images for older members in database"

	task :previous_members => :environment do
		developers_with_no_svg = Developer.where(snapcode_image: nil)

  	developers_with_no_svg.each do |d|
      svg_image = d.get_svg_image("https://feelinsonice-hrd.appspot.com/web/deeplink/snapcode?username=\
          #{ d.snapchat_username }&type=SVG")
  			d.update(snapcode: svg_image)
   		sleep 10
  	end
  end
end

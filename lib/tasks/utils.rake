namespace :utils do
  desc "Import all developers from production"
  task import_developers_from_production: :environment do
    require 'nokogiri'
    require 'open-uri'

    puts 'Importing started'
    (1..22).each do |page|
      html = open("http://devsnap.herokuapp.com/?page=#{page}")
      doc = Nokogiri::HTML(html, nil, 'UTF-8')
      rows = doc.xpath('//table/tbody/tr')
      details = rows.collect do |row|
        detail = {}
        [
          [:snapchat_username, 'td[1]/span[1]/text()'],
          [:full_name, 'td[2]/text()'],
          [:about, 'td[3]/text()'],
          [:modal_id, 'td[1]/@data-target']
        ].each do |name, xpath|
          detail[name] = row.at_xpath(xpath).to_s.strip
        end
        detail
      end
      details.each do |detail|
        detail.merge!(snapcode_image: doc.css("#{detail[:modal_id]} svg").to_html)
        detail.delete(:modal_id)
        Developer.create(detail)
      end
      print '.'
    end
  end
end

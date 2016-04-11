json.array!(@developers) do |developer|
  json.extract! developer, :id, :login, :full_name, :about
  json.url developer_url(developer, format: :json)
end

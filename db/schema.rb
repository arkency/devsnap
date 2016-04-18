ActiveRecord::Schema.define(version: 20160418211433) do
  enable_extension "plpgsql"

  create_table "developers", force: :cascade do |t|
    t.string   "snapchat_username"
    t.string   "full_name"
    t.text     "about"
    t.datetime "created_at",            null: false
    t.datetime "updated_at",            null: false
    t.string   "snapcode_file_name"
    t.string   "snapcode_content_type"
    t.integer  "snapcode_file_size"
    t.datetime "snapcode_updated_at"
    t.string   "snapcode_image"
  end
end

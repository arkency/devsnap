class CreateDevelopers < ActiveRecord::Migration[5.0]
  def change
    create_table :developers do |t|
      t.string :snapchat_username
      t.string :full_name
      t.text :about

      t.timestamps
    end
  end
end

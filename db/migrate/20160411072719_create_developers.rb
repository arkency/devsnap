class CreateDevelopers < ActiveRecord::Migration[5.0]
  def change
    create_table :developers do |t|
      t.string :login
      t.string :full_name
      t.text :about

      t.timestamps
    end
  end
end

class AddSnapcodeImageToDevelopers < ActiveRecord::Migration[5.0]
  def change
    add_column :developers, :snapcode_image, :string
  end
end

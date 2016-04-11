class ChangeColumnName < ActiveRecord::Migration[5.0]
  def change
  	rename_column :developers, :login, :snapchat_username
  end
end

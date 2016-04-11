class Developer < ApplicationRecord
  validates :snapchat_username, :full_name, :about, presence: true
end

class Developer < ApplicationRecord
  validates :snapchat_username, :full_name, :about, presence: true
  scope :from_newest, -> { order('created_at DESC') }
end

class Developer < ApplicationRecord
  validates :snapchat_username, :full_name, :about, presence: true
  validates :snapchat_username, uniqueness: true
  scope :from_newest, -> { order('created_at DESC') }
end

class Developer < ApplicationRecord
  validates :login, :full_name, :about, presence: true
  scope :from_newest, -> { order('created_at DESC') }
end

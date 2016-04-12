class Developer < ApplicationRecord
<<<<<<< HEAD
  validates :snapchat_username, :full_name, :about, presence: true
=======
  validates :login, :full_name, :about, presence: true
  scope :from_newest, -> { order('created_at DESC') }
>>>>>>> upstream/master
end

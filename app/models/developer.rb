class Developer < ApplicationRecord
  validates :login, :full_name, :about, presence: true
end

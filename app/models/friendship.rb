class Friendship < ApplicationRecord
  validates :friend_one, :friend_two, presence: true
end

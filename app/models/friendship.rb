class Friendship < ApplicationRecord
  validates :friend_one, :friend_two, presence: true

  belongs_to :sender,
    foreign_key: :friend_one,
    class_name: :User

  belongs_to :receiver,
    foreign_key: :friend_two,
    class_name: :User
end

class Post < ApplicationRecord
  validates :body, presence: true

  belongs_to :user,
    foreign_key: :author_id,
    class_name: :user

  belongs_to :wall,
    foreign_key: :location_id,
    class_name: :user


end

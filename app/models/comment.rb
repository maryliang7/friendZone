class Comment < ApplicationRecord
  validates :body, :post_id, :author_id, presence: true
end

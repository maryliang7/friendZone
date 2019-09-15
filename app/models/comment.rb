class Comment < ApplicationRecord
  validates :body, :post_id, :author_id, presence: true

  belongs_to :post,
    foreign_key: :post_id,
    class_name: :Post

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  belongs_to :parent,
    foreign_key: :parent_id,
    class_name: :Comment,
    optional: true

  has_many :children,
    foreign_key: :parent_id,
    class_name: :Comment
    
end

json.extract! post, :id, :body, :location_id, :author_id, :created_at

json.comments do
  post.comments.each do |comment|
    json.set! comment.id do
      json.extract! comment, :id, :body, :author_id, :post_id, :parent_id
    end
  end
end

json.likes do
  post.likes.each do |like|
    json.set! like.id do
      json.extract! like, :id, :user_id, :post_id
    end
  end
end

if post.photo.attached?
  json.photoUrl url_for(post.photo)
end

json.extract! user, :id, :email, :first_name, :last_name, :education, :location, :birth_date, :gender, :about_me, :hometown, :work, :languages, :created_at
json.profilePicUrl url_for(user.profilepic)
json.coverPicUrl url_for(user.coverpic)
json.friendIds user.friends.map(&:id)


json.sentRequests do 
  user.sentRequests.each do |request|
    json.set! request.id do
      json.extract! request, :id, :sender_id, :receiver_id
    end
  end
end

json.receivedRequests do 
  user.receivedRequests.each do |request|
    json.set! request.id do
      json.extract! request, :id, :sender_id, :receiver_id
    end
  end
end

json.acceptedFriendships do
  user.acceptedFriendships.each do |friendship|
    json.set! friendship.id do
      json.extract! friendship, :id, :friend_one
    end
  end
end

json.sentFriendships do
  user.sentFriendships.each do |friendship|
    json.set! friendship.id do
      json.extract! friendship, :id, :friend_two
    end
  end
end

@users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :email, :first_name, :last_name, :education, :location, :birth_date, :gender, :about_me, :hometown, :work, :languages, :created_at
    json.profilePicUrl url_for(user.profilepic)
    json.coverPicUrl url_for(user.coverpic)
    # json.partial! 'user', user: user
  end
end


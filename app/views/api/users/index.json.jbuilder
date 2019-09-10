@users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :email, :first_name, :last_name, :education, :location, :birth_date, :gender, :about_me
  end
end
# json.extract! @user, :id, :email, :first_name, :last_name, :education, :location, :birth_date, :gender, :about_me, :hometown, :work, :languages
json.partial! 'api/users/user', user: @user


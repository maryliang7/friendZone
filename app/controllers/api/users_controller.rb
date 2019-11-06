require 'open-uri'

class Api::UsersController < ApplicationController

  def index
    if (params[:query])
      query = ('%' + params[:query].downcase + '%')
      @users = User.where("lower(users.first_name) LIKE (?) OR lower(users.last_name) LIKE (?)", query, query)
    else
      @users = User.all
    end
    render "api/users/index"
  end
  
  def create
    @user = User.new(user_params)

    defaultPP = open('https://friendzone-images.s3-us-west-1.amazonaws.com/facebook_default.jpg')
    defaultCP = open('https://friendzone-images.s3-us-west-1.amazonaws.com/facebook_cover.jpg')
    @user.profilepic.attach(io: defaultPP, filename: 'facebook_default.jpg')
    @user.coverpic.attach(io: defaultCP, filename: 'facebook_cover.jpg')

    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = User.find(params[:id])

    if @user.update(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.with_attached_photos.find(params[:id])
    render :show
  end

  private
  def user_params
    params.require(:user).permit(:email, :password, :first_name, :last_name, :gender, :birth_date, :education, :location, :about_me, :work, :hometown, :languages, :coverpic, :profilepic, photos: [])
  end
end

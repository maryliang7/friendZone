require 'open-uri'

class Api::UsersController < ApplicationController
  def index
    @users = User.all
    render "api/users/index"
  end
  
  def create
    @user = User.new(user_params)
    # @user.profilepic.attach(io: File.open("/Users/maryliang/Desktop/friendZone/app/assets/images/facebook_default.jpg"), filename: "facebook_default.jpg")
    # @user.coverpic.attach(io: File.open("/Users/maryliang/Desktop/friendZone/app/assets/images/facebook_cover.jpg"), filename: "facebook_cover.jpg")
    defaultPP = open('https://s3.amazonaws.com/friendzone-images/facebook_default.jpg')
    defaultCP = open('https://s3.amazonaws.com/friendzone-images/facebook_cover.jpg')
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
    @user = User.find(params[:id])
    render :show
  end

  private
  def user_params
    params.require(:user).permit(:email, :password, :first_name, :last_name, :gender, :birth_date, :education, :location, :about_me, :work, :hometown, :languages, :coverpic, :profilepic)
  end
end

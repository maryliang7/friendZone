class Api::FriendshipsController < ApplicationController

  def create(frienship_params)
    @friendship = Friendship.new(frienship_params)

    if @friendship.save
      render :show
    else
      render json: @friendship.errors.full_messages, status: 422
    end      
  end

  def destroy
    @friendship = Friendship.find(params[:id])
    if @friendship.destroy
      render :show
    end
  end

  private
  def friendship_params
    params.require(:friendship).permit(:friend_one, :friend_two)
  end
  
end

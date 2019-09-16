class Api::FriendRequestsController < ApplicationController

  def create(frienship_req_params)
    @friendship_req = Friendship.new(frienship_params)

    if @friendship_req.save
      render :show
    else
      render json: @friendship_req.errors.full_messages, status: 422
    end      
  end

  def destroy
    @friendship_req = Friendship.find(params[:id])
    if @friendship_req.destroy
      render :show
    end
  end

  private
  def friendship_req_params
    params.require(:friendship_request).permit(:sender_id, :receiver_id)
  end

end

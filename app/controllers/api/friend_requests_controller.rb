class Api::FriendRequestsController < ApplicationController

  def create

    @friendship_req = FriendRequest.new(friendship_req_params)
    # @friendship_req.sender_id = current_user.id

    if @friendship_req.save
      render :show
    else
      render json: @friendship_req.errors.full_messages, status: 422
    end      
  end

  def destroy
    @friendship_req = FriendRequest.find(params[:id])
    if @friendship_req.destroy
      render :show
    end
  end

  private
  def friendship_req_params
    params.require(:friend_request).permit(:sender_id, :receiver_id)
  end

end

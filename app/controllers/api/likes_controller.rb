class Api::LikesController < ApplicationController
  def create
    @like = Like.new(like_params)

    if @like.save
      render :show
    else
      render json: @like.errors.full_messages, status: 422
    end
  end
 
  def destroy
    @like = Like.find(params[:id])

    if @like.destroy
      render :show
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  private
  def like_params
    params.require(:like).permit(:post_id, :user_id)
  end
end

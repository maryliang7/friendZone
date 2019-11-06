class Api::PostsController < ApplicationController
  def index

    if !params[:query]
      @posts = Post.all
    elsif params[:query][:location_id]
      @posts = Post.where(location_id: params[:query][:location_id])
    elsif params[:query][:author_id]
      @posts = Post.where(:author_id => params[:query][:author_id])
    end

    render :index
  end

  def show
    @post = Post.find(params[:id])
  end

  def create 
    @post = Post.new(post_params)

    if @post.save
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def update
    @post = Post.find(params[:id])

    if @post.update(post_params)
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def destroy
    @post = Post.find(params[:id])

    if @post.destroy
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  private
  def post_params
    params.require(:post).permit(:body, :author_id, :location_id)
  end

end

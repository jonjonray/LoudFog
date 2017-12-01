class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      @comments = [@comment]
      render :show
    else
      render json: ["Comment not valid"], status: 422
    end
  end


  def show
    @comments = Comment.where(song_id: params[:id])
  end

  def destroy
    @comment = Comment.find(params[:comment_id])
    if @comment
        @comment.destroy
    else
      render json: ["comment not found"], status: 404
    end
  end


  private

  def comment_params
    params.require(:comment).permit(:body, :song_id, :user_id)
  end
end

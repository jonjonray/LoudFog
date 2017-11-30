class Api::LikesController < ApplicationController


  def create
    @like = Like.new(like_params)
    @like.save
  end

  def update
    user_id = params[:like][:user_id]
    song_id = params[:like][:song_id]
    like = Like.where(user_id: user_id, song_id: song_id)
    if like.first
      like.first.destroy
    else
      render json: ["Like Not Found"], status: 404
    end
  end




  private

  def like_params
    params.permit(:like).require(:user_id, :like_id)
  end

end

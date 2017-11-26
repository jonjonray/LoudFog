class Api::SongsController < ApplicationController

  def create
    @song = Song.new(song_params)
    if @song.save
      render :show
    else
      render json: @song.errors.full_messages, status: 422
    end
  end

  def index
    @songs = Song.all
  end

  def show
    @song = Song.find(params[:song_id])
    if @song
      render :show
    else
      render json: ["No song was found"], status: 404
    end
  end

  def update
    @song = Song.find(params[:song_id])
    if @song.update(song_params)
      render :show
    else
      render json: ["Unable to update song"], status: 422
    end
  end

  def destroy
    @song = Song.find(params[:song_id])
    if @song && @song.user_id == current_user.id
      @song.destroy
      render :index
    else
      render json: ["Unable to delete song"], status: 422
    end

  end




  private

  def song_params
    params.require(:song).permit(:title, :user_id, :audio, :image)
  end

end

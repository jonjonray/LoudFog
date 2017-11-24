class AddAudioToSongs < ActiveRecord::Migration[5.1]
  def change
    add_attachment :songs, :audio
  end
end

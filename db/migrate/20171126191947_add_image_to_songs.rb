class AddImageToSongs < ActiveRecord::Migration[5.1]
  def change
    add_attachment :songs, :image
  end
end

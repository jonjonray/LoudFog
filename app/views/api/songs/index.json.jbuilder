@songs.each do |song|
  json.set! song.id do
    json.partial! "api/songs/songs", song: song
    json.likes (song.likes.map { |like| like.user_id } )
  end
end

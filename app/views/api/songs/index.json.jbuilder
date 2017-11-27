@songs.each do |song|
  json.set! song.id do
    json.partial! "api/songs/songs", song: song
  end
end

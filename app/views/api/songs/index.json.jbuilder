@songs.each do |song|
  json.set! song.id do
    json.partial! "api/songs/songs", song: song
    json.partial! "api/users/users", user: song.user
  end
end

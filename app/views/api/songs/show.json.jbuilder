json.partial! "api/songs/songs", song: @song
json.likes (@song.likes.map { |like| like.user_id } )

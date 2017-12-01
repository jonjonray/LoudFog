@users.each do |user|
  json.set! user.id do
    json.partial! "api/users/users", user: user
    json.likes (user.likes.map { |like| like.song_id } )
  end
end

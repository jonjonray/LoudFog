@comments.each do |comment|
  json.set! comment.id do
    json.extract! comment, :body, :song_id, :user_id
  end
end

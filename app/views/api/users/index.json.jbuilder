@users.each do |user|
  json.set! user.id do
    json.partial! "api/users/users", user: user
  end
end

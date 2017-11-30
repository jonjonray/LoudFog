# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Song.destroy_all
demo_user = User.create(username: "Demo_User", password: "password", email: "test@email.com", avatar_url: "https://s3-us-west-1.amazonaws.com/loudfog/avatar_1.jpeg")

avatars = [
"https://s3-us-west-1.amazonaws.com/loudfog/avatar_1.jpeg",
"https://s3-us-west-1.amazonaws.com/loudfog/avatar_3.jpeg",
"https://s3-us-west-1.amazonaws.com/loudfog/avatar_4.jpeg",
"https://s3-us-west-1.amazonaws.com/loudfog/avatar_5.jpeg"
          ]


10.times do |i|
  name = Faker::Internet.user_name
  email = Faker::Internet.safe_email
  User.create(username: name, password: "password", email: email, avatar_url: avatars[i])
end


13.times do |i|
  user_id = User.all.sample.id
  title = Faker::BossaNova.song
  while title.length < 5 do
      title = Faker::BossaNova.song
  end
  image = File.new("app/assets/images/seed/#{i+1}.jpg")
  audio = File.new("app/assets/music/#{i+1}.mp3")
  Song.create(user_id: user_id, title: title, image: image, audio: audio)
end

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
username = ["userBob", "meanCat", "AndresTheGreat", "hassium", "dolerite",
            "popinjay", "SeaTriscuit", "gus_music", "wyatt", "buster"]

10.times do |i|
  name = username[i]
  email = "test#{i}@loudfog.com"
  User.create(username: name, password: "password", email: email, avatar_url: avatars[i])
end

songs = ["Light For The Road",
"Think Of Power","Broken Chances", "Songs For Tomorrow", "When You're Smiling",
"Midnight Inventions", "Never Let Me Go", "Walking Mind", "Stormy Money",
"Sound Of The Evening", "Dust Of Tomorrow"]

Song.create(user_id: 0, title: "Lost Things", image: File.new("app/assets/images/seed/13.jpg"), audio: File.new("app/assets/music/13.mp3"))
Song.create(user_id: 0, title: "Darling, The Night Is Still Young", image: File.new("app/assets/images/seed/12.jpg"), audio: File.new("app/assets/music/12.mp3"))


11.times do |i|
  user_id = User.all.sample.id
  title = songs[i]

  image = File.new("app/assets/images/seed/#{i+1}.jpg")
  audio = File.new("app/assets/music/#{i+1}.mp3")
  Song.create(user_id: user_id, title: title, image: image, audio: audio)
end


  Like.create(user_id: 1, song_id: 0)
  Like.create(user_id: 1, song_id: 3)
  Like.create(user_id: 1, song_id: 5)
  Like.create(user_id: 1, song_id: 6)
  Like.create(user_id: 1, song_id: 7)
  Like.create(user_id: 1, song_id: 9)



  comments = ["Great stuff", "Love the song", "Interesting production", "Would love to see more songs like this",
   "When was this released?", "Been listening to this non-stop!", "My partner loves this song",
    "I want more of this!", "Nice", "Oooh, lovin' this one!", "Awesome instrumentals", "Really great production here!",
  "Sick track!", "Strong ending", "I actually love this"]


  15.times do |i|
    user_id = User.all.sample.id
    song_id = Song.all.sample.id
    comment = comments[i]
    Comment.create(user_id: user_id, song_id: song_id, body: comment)
  end

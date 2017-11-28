json.extract! song, :id, :title, :user_id

json.audio_url song.audio.url
json.image_url song.image.url(:medium)

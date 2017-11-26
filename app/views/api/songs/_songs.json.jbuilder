json.extract! song, :title, :user_id

json.audio_url asset_path(song.audio.url)
json.image_url asset_path(song.image.url)

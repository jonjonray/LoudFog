class Comment < ApplicationRecord
  validates :body, :user_id, :song_id, presence: true

  belongs_to :song
  belongs_to :user
end

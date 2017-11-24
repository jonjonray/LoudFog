class Song < ApplicationRecord
  validates :title, :user_id, presence: true

  has_attached_file :audio
  validates_attachment_content_type :audio, content_type: /\Aaudio\/.*\z/

  belongs_to :user
end

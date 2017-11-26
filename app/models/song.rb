class Song < ApplicationRecord
  validates :title, :user_id, presence: true

  has_attached_file :audio
  validates :audio, attachment_presence: true
  validates_attachment_content_type :audio, content_type: /\Aaudio\/.*\z/

  has_attached_file :image
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :user
end

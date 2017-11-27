class Song < ApplicationRecord
  validates :title, :user_id, presence: true
  validates :title, length: { minimum: 5 }
  has_attached_file :audio
  validates_attachment_content_type :audio, content_type: /\Aaudio\/.*\z/

  has_attached_file :image, styles: {
    thumb: '100x100',
    medium: '300x300'
  }
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/


  belongs_to :user
end

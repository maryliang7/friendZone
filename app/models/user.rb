class User < ApplicationRecord
  validates :email, :password_digest, :session_token, :first_name, :last_name, :gender, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true
  validate :ensure_photos
  
  attr_reader :password
  after_initialize :ensure_session_token

  has_one_attached :profilepic
  has_one_attached :coverpic

  has_many_attached :photos

  has_many :posts,
    foreign_key: :author_id,
    class_name: :Post

  has_many :wallPosts,
    foreign_key: :location_id,
    class_name: :Post

  has_many :sentFriendships,
    foreign_key: :friend_one,
    class_name: :Friendship

  has_many :acceptedFriendships,
    foreign_key: :friend_two,
    class_name: :Friendship

  has_many :sentRequests,
    foreign_key: :sender_id,
    class_name: :FriendRequest

  has_many :receivedRequests,
    foreign_key: :receiver_id,
    class_name: :FriendRequest


  def ensure_photos
    unless self.coverpic.attached?
      errors[:coverpic] << "Cover photo be attached"
    end
    unless self.profilepic.attached?
      errors[:profilepic] << "Profile photo must be attached"
    end
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def friends
    friendIds = self.acceptedFriendships.map {|el| el.friend_one } + self.sentFriendships.map {|el| el.friend_two }
    User.find(friendIds)
  end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end
end
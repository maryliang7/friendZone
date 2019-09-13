class User < ApplicationRecord
  validates :email, :password_digest, :session_token, :first_name, :last_name, :gender, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  attr_reader :password
  after_initialize :ensure_session_token

  has_many :posts,
    foreign_key: :author_id,
    class_name: :post

  has_many :wall_posts,
    foreign_key: :location_id,
    class_name: :post

  # has_many :friends,
  #   foreign_key: :location_id,
  #   class_name: :post

  # has_many :requests,
  #   foreign_key: :location_id,
  #   class_name: :post

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

  private
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end
end
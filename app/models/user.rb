# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  workspace_id    :integer          not null
#  display_name    :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord

    validates :workspace_id, :display_name, :email, :password_digest, presence: true
    validates :session_token, presence: true, uniqueness: true
    validates :email, uniqueness: {scope: :workspace_id}
    validates :password, length: {minimum: 8, allow_nil: true}

    attr_reader :password

    after_initialize :ensure_session_token

    belongs_to :workspace,
        primary_key: :id,
        foreign_key: :workspace_id,
        class_name: "Workspace"

    has_many :messages,
        primary_key: :id,
        foreign_key: :sender_id,
        class_name: :Message

    has_many :channel_subscriptions,
        primary_key: :id,
        foreign_key: :subscriber_id,
        class_name: "ChannelSubscriber"

    has_many :channels,
        through: :channel_subscriptions,
        source: :channel

    has_many :direct_message_participations,
        primary_key: :id,
        foreign_key: :participant_id,
        class_name: "DirectMessageParticipant"

    has_many :direct_messages,
        through: :direct_message_participations,
        source: :direct_message

    def self.find_by_credentials(workspace_id, email, password)
        user = User.find_by(workspace_id: workspace_id, email: email)
        if user && user.is_password?(password)
            return user 
        end
        return nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save!
        self.session_token
    end

end

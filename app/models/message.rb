# == Schema Information
#
# Table name: messages
#
#  id          :bigint           not null, primary key
#  sender_id   :integer          not null
#  parent_type :string           not null
#  parent_id   :integer          not null
#  body        :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Message < ApplicationRecord
    validates :body, presence: true
    validates :parent_type, inclusion: {in: %w(Channel DirectMessage Message)}

    belongs_to :parent, 
        polymorphic: true

    has_many :messages, as: :parent, 
        class_name: "Message"
    
    belongs_to :sender,
        primary_key: :id,
        foreign_key: :sender_id,
        class_name: :User
end

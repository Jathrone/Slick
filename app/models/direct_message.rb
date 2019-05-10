# == Schema Information
#
# Table name: direct_messages
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class DirectMessage < ApplicationRecord

    has_many :messages, as: :parent, 
        class_name: "Message"

    has_many :direct_message_participations,
        primary_key: :id,
        foreign_key: :direct_message_id,
        class_name: "DirectMessageParticipant"

    has_many :participants,
        through: :direct_message_participations,
        source: :participant
    
end
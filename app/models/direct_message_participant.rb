# == Schema Information
#
# Table name: direct_message_participants
#
#  id                :bigint           not null, primary key
#  direct_message_id :integer          not null
#  participant_id    :integer          not null
#  is_muted          :boolean          not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

class DirectMessageParticipant < ApplicationRecord

    validates :is_muted, inclusion: {in: [true, false]}

    belongs_to :participant,
        primary_key: :id,
        foreign_key: :participant_id,
        class_name: "User"

    belongs_to :direct_message,
        primary_key: :id,
        foreign_key: :direct_message_id,
        class_name: "DirectMessage"
end

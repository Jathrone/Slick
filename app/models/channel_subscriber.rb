# == Schema Information
#
# Table name: channel_subscribers
#
#  id            :bigint           not null, primary key
#  channel_id    :integer          not null
#  subscriber_id :integer          not null
#  is_muted      :boolean          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class ChannelSubscriber < ApplicationRecord

    validates :is_muted, inclusion: {in: [true, false]}

    belongs_to :subscriber,
        primary_key: :id,
        foreign_key: :subscriber_id,
        class_name: "User"

    belongs_to :channel,
        primary_key: :id,
        foreign_key: :channel_id,
        class_name: "Channel"

    after_initialize :ensure_not_muted

    def ensure_not_muted
        self.is_muted ||= false
    end
end

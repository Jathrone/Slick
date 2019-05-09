# == Schema Information
#
# Table name: channels
#
#  id           :bigint           not null, primary key
#  name         :string           not null
#  topic        :string
#  purpose      :text
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  workspace_id :integer          not null
#

class Channel < ApplicationRecord
    validates :name, presence: true

    has_many :messages, as: :parent, 
        class_name: "Message"

    belongs_to :workspace,
        primary_key: :id,
        foreign_key: :workspace_id,
        class_name: "Workspace"

    has_many :channel_subscriptions,
        primary_key: :id,
        foreign_key: :channel_id,
        class_name: "ChannelSubscriber"

    has_many :subscribers,
        through: :channel_subscriptions,
        source: :subscriber
    
    belongs_to :workspace,
        primary_key: :id,
        foreign_key: :workspace_id,
        class_name: "Workspace"
    
end

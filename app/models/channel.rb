# == Schema Information
#
# Table name: channels
#
#  id         :bigint           not null, primary key
#  creator_id :string           not null
#  name       :string           not null
#  topic      :string
#  purpose    :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Channel < ApplicationRecord
    validates :name, presence: true

    has_many :messages, as: :parent, 
        class_name: "Message"
end

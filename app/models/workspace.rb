# == Schema Information
#
# Table name: workspaces
#
#  id            :bigint           not null, primary key
#  name          :string           not null
#  creator_email :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Workspace < ApplicationRecord
    validates :creator_email, presence: true
    validates :name, presence: true, uniqueness: true
end

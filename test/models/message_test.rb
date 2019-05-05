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

require 'test_helper'

class MessageTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

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

require 'test_helper'

class DirectMessageParticipantTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

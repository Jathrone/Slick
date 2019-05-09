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

require 'test_helper'

class ChannelSubscriberTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

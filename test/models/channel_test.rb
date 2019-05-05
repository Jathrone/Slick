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

require 'test_helper'

class ChannelTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

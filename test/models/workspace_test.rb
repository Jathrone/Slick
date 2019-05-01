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

require 'test_helper'

class WorkspaceTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

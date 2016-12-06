# == Schema Information
#
# Table name: sites
#
#  id         :integer          not null, primary key
#  name       :text
#  location   :text
#  tide       :text
#  level      :text
#  depth      :text
#  image      :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class SiteTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

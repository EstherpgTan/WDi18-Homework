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

class Site < ActiveRecord::Base
  has_many :photos
end

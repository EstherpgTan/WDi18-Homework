# == Schema Information
#
# Table name: photos
#
#  id           :integer          not null, primary key
#  description  :text
#  year         :text
#  photographer :text
#  image        :text
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Photo < ActiveRecord::Base
  belongs_to :site
end

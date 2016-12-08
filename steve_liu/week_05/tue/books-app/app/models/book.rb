# == Schema Information
#
# Table name: books
#
#  id          :integer          not null, primary key
#  title       :text
#  year        :text
#  image       :text
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Book < ActiveRecord::Base
end

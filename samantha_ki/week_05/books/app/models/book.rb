# == Schema Information
#
# Table name: books
#
#  id         :integer          not null, primary key
#  title      :text
#  language   :text
#  pages      :integer
#  genre      :text
#  image      :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Book < ActiveRecord::Base
  belongs_to :author
end

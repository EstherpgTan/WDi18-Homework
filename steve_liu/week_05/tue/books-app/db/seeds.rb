# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# create_table "authors", force: :cascade do |t|
#   t.text     "name"
#   t.date     "dob"
#   t.text     "image"
#   t.datetime "created_at", null: false
#   t.datetime "updated_at", null: false
# end
#
# create_table "books", force: :cascade do |t|
#   t.text     "title"
#   t.text     "year"
#   t.text     "image"
#   t.text     "description"
#   t.datetime "created_at",  null: false
#   t.datetime "updated_at",  null: false
# end

Book.destroy_all

b1 = Book.create({
  :title => "A Game of Thrones",
  :year => '1996',
  :image => "sample",
  :description => "lorem ipsum"
  })

b2 = Book.create({
  :title => "Harry Potter and the Philosopher's Stone",
  :year => '2001',
  :image => "sample",
  :description => "lorem ipsum"
  })

  binding.pry
  p ""

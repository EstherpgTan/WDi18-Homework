# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Author.destroy_all

a1 = Author.create({
  :name => "Antoine du Saint-Exupery",
  :nationality => "French",
  :dob => "1900/06/29",
  :image => "https://s-media-cache-ak0.pinimg.com/736x/82/b6/5a/82b65a7fb16d8e7e63182245a9839df5.jpg"
  })

a2 = Author.create({
  :name => "Anthony Kiedis",
  :nationality => "American",
  :dob => "1962/11/01",
  :image => "http://www.alternativenation.net/wp-content/uploads/2016/05/anthonykiedishat.jpg"
  })

Book.destroy_all

b1 = Book.create({
  :title => "Le Petit Prince",
  :language => "French",
  :genre => "Children's Book",
  :pages => "1943",
  :image => "https://upload.wikimedia.org/wikipedia/en/0/05/Littleprince.JPG"
  })

b2 = Book.create({
  :title => "Scar Tissue",
  :language => "English",
  :genre => "Autobiography",
  :pages => "2004",
  :image => "http://t2.gstatic.com/images?q=tbn:ANd9GcS3hu2HOK5nklwAl0wmKKoNVVwnHaTjUpU20ekV0hxHvzAUfVck"
  })

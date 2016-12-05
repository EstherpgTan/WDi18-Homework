# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Flight.destroy_all
Passenger.destroy_all

flight1 = Flight.create( {
  :flight_num => "JQ123",
  :origin => "Sydney",
  :destination => "Canberra"
  } )

flight2 = Flight.create( {
  :flight_num => "SKY983",
  :origin => "Sydney",
  :destination => "Gold Coast"
} )

psg1 = Passenger.create( {
  :first_name => "Hayley",
  :last_name => "Petrov",
  :seat_num => "42A",
  :contact_num => "04987876",
  :flight_id => flight1.id
} )

psg2 = Passenger.create( {
  :first_name => "Olivia",
  :last_name => "Basheer",
  :seat_num => "42B",
  :contact_num => "04332356",
  :flight_id => flight2.id
} )

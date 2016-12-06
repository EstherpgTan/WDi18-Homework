require "pry"
require "sinatra"
require "sinatra/reloader"
require "sqlite3"

# Home page
get "/" do
  erb( :home )
end

# About page
get "/about" do
  erb( :about )
end

# Dipslay the list of all of it
get "/mountains" do
  # SQLite3 Connection
  db = SQLite3::Database.new( "database.db" )
  db.results_as_hash = true

  # Select all the entries
  sql = "SELECT * FROM mountains"

  @mountains = db.execute sql

  # puts @wonders
  # binding.pry
  db.close

  erb( :show_mountains )
end

get "/mountains/new" do
  erb( :new_mountain )
end

# Open an individual item
get "/mountains/:id" do
  # SQLite3 Connection
  db = SQLite3::Database.new( "database.db" )
  db.results_as_hash = true

  # Select all the entries
  sql = "SELECT * FROM mountains WHERE id == #{ params[ "id" ] }"

  @mountain = db.execute( sql ).first

  db.close

  erb( :show_mountain )
end

# Add the item
post "/mountains" do
  db = SQLite3::Database.new( "database.db" )

  name = params[ "name" ]
  description = params[ "description" ]
  location = params[ "location" ]
  image = params[ "image" ]
  elevation = params[ "elevation" ]

  sql = "INSERT INTO mountains ( name, description, location, image, elevation ) VALUES ( '#{ name }', '#{ description }', '#{ location }', '#{ image }', '#{ elevation.to_i }' )"

  db.execute( sql )

  db.close

  redirect( "/mountains" )
end

# Edit the item ( which will direct to a form )
get "/mountains/:id/update" do

  mountain_id = params[ "id" ]

  db = SQLite3::Database.new( "database.db" )
  db.results_as_hash = true

  sql = "SELECT * from mountains WHERE id == #{ mountain_id }"

  @mountain = db.execute( sql ).first

  db.close

  erb( :edit_mountain )

end

post "/mountains/:id" do
  db = SQLite3::Database.new( "database.db" )

  id = params[ "id" ]
  name = params[ "name" ]
  description = params[ "description" ]
  location = params[ "location" ]
  image = params[ "image" ]
  elevation = params[ "elevation" ]

  sql = "UPDATE mountains SET name = '#{ name }', description = '#{ description }', location = '#{ location }', image = '#{ image }', elevation = '#{ elevation }' WHERE id == #{ id }"

  db.execute( sql )

  db.close

  redirect( "/mountains" )
end


# Delete the item
get "/mountains/:id/delete" do
  db = SQLite3::Database.new( "database.db" )

  id = params[ "id" ]

  sql = "DELETE FROM mountains WHERE id == #{ id }"

  db.execute( sql )

  db.close

  redirect( "/mountains" )
end

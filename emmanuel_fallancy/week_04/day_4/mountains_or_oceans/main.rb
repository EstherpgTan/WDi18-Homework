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
get "/wonders" do
  # SQLite3 Connection
  db = SQLite3::Database.new( "database.db" )
  db.results_as_hash = true

  # Select all the entries
  sql = "SELECT * FROM wonders"

  @wonders = db.execute sql

  # puts @wonders
  # binding.pry
  db.close

  erb( :show_wonders )
end

# Open an individual item
get "/wonders/:id" do
  # SQLite3 Connection
  db = SQLite3::Database.new( "database.db" )
  db.results_as_hash = true

  # Select all the entries
  sql = "SELECT * FROM wonders WHERE id == #{ params[ "id" ] }"

  @wonder = db.execute( sql ).first

  db.close

  erb( :show_wonder )
end

# Add the item

# Edit the item ( which will direct to a form )

# Delete the item

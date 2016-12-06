require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get "/" do
  erb :home
end

get "/about" do
  erb :about
end

get "/contact" do
  erb :contact
end

get "/oceans" do
  db = SQLite3::Database.new "database.db" #store database in a variable
  db.results_as_hash = true #returns results as hash

  @all_oceans = db.execute "SELECT * FROM oceans ORDER BY name ASC"
  # binding.pry

  db.close #make sure to close the connection
  erb :oceans_index
end

get "/oceans/new" do
  erb :oceans_new
end

post "/oceans" do
  # @id = params["id"]

db = SQLite3::Database.new "database.db" #store database in a variable
db.results_as_hash = true #returns results as hash

# INSERT INTO oceans (name, image, description) VALUES
sql = "INSERT INTO oceans (name, image, description, height) VALUES ('#{params["name"]}', '#{params["image"]}', '#{params["description"]}', '#{params["height"]}')"
db.execute sql
db.close #make sure to close the connection

redirect "/oceans"
end

get "/oceans/:id" do
  @id = params["id"]

  db = SQLite3::Database.new "database.db" #store database in a variable
  db.results_as_hash = true #returns results as hash

  sql = "SELECT * FROM oceans WHERE id == #{@id}"
  puts sql
  @ocean = db.execute(sql).first
  # @all_oceans = db.execute "SELECT * FROM oceans"
  # binding.pry

  db.close #make sure to close the connection

  erb :oceans_show
end

get "/oceans/:id/delete" do
  @id = params["id"]

  db = SQLite3::Database.new "database.db" #store database in a variable
  db.results_as_hash = true #returns results as hash

  #DELETE FROM oceans WHERE id == __
  sql = "DELETE FROM oceans WHERE id == #{@id}"
  db.execute sql
  db.close #make sure to close the connection

  redirect "/oceans"
end

get "/oceans/:id/edit" do
  @id = params["id"]

  db = SQLite3::Database.new "database.db" #store database in a variable
  db.results_as_hash = true #returns results as hash

  sql = "SELECT * FROM oceans WHERE id == #{@id}"
  puts sql
  @ocean = db.execute(sql).first
  # @all_oceans = db.execute "SELECT * FROM oceans"
  # binding.pry

  db.close #make sure to close the connection
  erb :oceans_edit
end

post "/oceans/:id" do
  @id = params["id"]
  name = params["name"]
  image = params["image"]
  height = params["height"]
  description = params["description"]

  db = SQLite3::Database.new "database.db" #store database in a variable
  db.results_as_hash = true #returns results as hash

  sql = "UPDATE oceans SET name = '#{name}', description = '#{description}', image = '#{image}', height = '#{height}' WHERE id == #{@id}"

  db.execute(sql).first
  # @all_oceans = db.execute "SELECT * FROM oceans"
  # binding.pry

  db.close #make sure to close the connection
  redirect "/oceans/#{@id}"
end

get "/mountains" do
  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true

  @all_mountains = db.execute "SELECT * FROM mountains ORDER BY name ASC"

  db.close

  erb :mountains_index

end

get "/mountains/new" do
  erb :mountains_new
end

get "/mountains/:id" do
  id = params["id"]

  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true

  @mountain = (db.execute "SELECT * FROM mountains WHERE id == #{id}")[0]

  db.close

  erb :mountains_show
end

post "/mountains" do
  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true

  db.execute "INSERT INTO mountains (name, height, description) VALUES ('#{params["name"]}', '#{params["height"]}', '#{params["description"]}')"

  db.close

  redirect "/mountains"
end

get "/mountains/:id/delete" do
  id = params["id"]

  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true

  db.execute "DELETE FROM mountains WHERE id == #{id}"

  db.close

  redirect "/mountains"
end

get "/mountains/:id/edit" do
  @id = params["id"]
  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true

  db.execute "SELECT * FROM mountains WHERE id == #{@id}"

  db.close

  erb :mountains_edit
end

post "/mountains/:id" do
  id = params["id"]
  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true

  db.execute "UPDATE mountains SET name = '#{params["name"]}', height = '#{params["height"]}', description = '#{params["description"]}' WHERE id == #{id}"

  db.close

  redirect "/mountains/#{id}"
end

get "/cars" do
  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true

  @all_cars = db.execute "SELECT * FROM cars ORDER BY make ASC"

  db.close

  erb :cars_index
end

get "/cars/:id" do
  id = params["id"]
  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true

  @car = (db.execute "SELECT * FROM cars WHERE id == #{id}").first

  db.close

  erb :cars_show
end

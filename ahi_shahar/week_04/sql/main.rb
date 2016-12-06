require 'pry' # Debugging
require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3' # Ruby interface to SQLite3

get "/" do
  erb :home
end

get "/about" do
  erb :about
end

get "/dives/new" do
  erb :dives_new
end
#  location photographer description image

get "/dives" do
  db = SQLite3::Database.new("database.db")
  db.results_as_hash = true
  @all_dives = db.execute "SELECT * FROM dives"
  db.close
  erb :dives
end

post "/dives" do
  db = SQLite3::Database.new("database.db")
  db.results_as_hash = true
  sql = "INSERT INTO dives (location, photographer, description, image) VALUES ('#{params["location"]}', '#{params["photographer"]}', '#{params["description"]}', '#{params["image"]}');"
  db.execute sql
  db.close
  redirect "/dives"
end

get "/dives/:id" do
  @id = params["id"]
  db = SQLite3::Database.new("database.db")
  db.results_as_hash = true
  sql = "SELECT * FROM dives WHERE id == #{@id};"
  @dive = db.execute(sql).first
  db.close
  erb :dives_show
end

get "/dives/:id/edit" do
  @id = params["id"]
  db = SQLite3::Database.new("database.db")
  db.results_as_hash = true
  sql = "SELECT * FROM dives WHERE id == #{@id};"
  @dive = db.execute(sql).first
  db.close
  erb :dives_edit
end

post "/dives/:id" do
  @id = params["id"]
  db = SQLite3::Database.new("database.db")
  db.results_as_hash = true
  sql = "UPDATE dives SET location = '#{params['location']}', photographer = '#{params['photographer']}', description = '#{params['description']}', image = '#{params['image']}' WHERE id == #{@id}"
  db.execute sql
  db.close
  redirect "/dives/#{@id}"
end



get "/dives/:id/delete" do
  @id = params["id"]
  db = SQLite3::Database.new("database.db")
  db.results_as_hash = true
  sql = "DELETE FROM dives WHERE id == #{@id};"
  db.execute sql
  db.close
  redirect "/dives"
end

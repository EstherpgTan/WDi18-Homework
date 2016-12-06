require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get "/" do
  erb :home
end

get "/mountains" do
  db = SQLite3::Database.new("database.db")
  db.results_as_hash = true
  @all_mountains = db.execute("SELECT * FROM mountains")
  db.close()
  erb :mountains_index
end

get "/mountains/:id" do
  @id = params["id"]
  db = SQLite3::Database.new("database.db")
    db.results_as_hash = true
    @mountain_individual = db.execute ("SELECT * FROM mountains WHERE id == #{@id}");
    db.close()
    erb :mountains_individual
end

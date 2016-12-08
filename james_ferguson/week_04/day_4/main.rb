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

@all_mountains = db.execute "SELECT * FROM mountains"

    db.close

  erb :mountains_index
end

  get "/mountains/new" do
    erb :mountains_new
  end

  post "/mountains" do
    db = SQLite3::Database.new("database.db")
    db.results_as_hash = true

    sql = "INSERT INTO mountains (name, country, image) VALUES ('#{params["name"]}', '#{params["country"]}','#{params["image"]}')"

    db.execute sql
    db.close
    redirect "/mountains"
  end

  get "/mountains/:id" do
  @id = params["id"]

  db = SQLite3::Database.new("database.db")
    db.results_as_hash = true

    sql = "SELECT * FROM mountains WHERE id == #{@id}"
    puts sql

    @mountain = db.execute(sql).first

    db.close

  erb :mountains_show
end

get "/mountains/:id/delete" do
  @id = params["id"]

  db = SQLite3::Database.new("database.db")
    db.results_as_hash = true

    sql = "DELETE FROM mountains WHERE id == #{@id}"
    db.execute sql
    db.close

    redirect "/mountains"
end

get "/mountains/:id/edit" do
  @id = params["id"]

  db = SQLite3::Database.new("database.db")
    db.results_as_hash = true

    sql = "SELECT * FROM mountains WHERE id == #{@id}"
    @mountain = db.execute(sql).first
    db.close

  erb :mountains_edit
end

post "/mountains/:id" do
  @id = params["id"]

  db = SQLite3::Database.new("database.db")
    db.results_as_hash = true
    sql ="UPDATE mountains SET name = '#{params['name']}', country = '#{params['country']}', image = '#{params['image']}' WHERE id == #{@id}"
    db.execute sql

    db.close
    redirect "/mountains/#{@id}"
end

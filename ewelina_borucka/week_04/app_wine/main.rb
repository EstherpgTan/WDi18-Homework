require 'sqlite3'           # Sqlite3 for our database
require 'pry'               # Pry for debugging
require 'sinatra'           # Sinatra for our web server
require 'sinatra/reloader'  # Sinatra Reloader so we don't need to keep restarting our server


get '/' do
    erb :home
end


get '/wines' do

    db = SQLite3::Database.new("wines.db")
    db.results_as_hash = true
    @all_wines = db.execute "SELECT * FROM wines;"
    db.close
    erb :wines_index
end


get '/wines_pick/:id' do
    db = SQLite3::Database.new("wines.db")
    db.results_as_hash = true
    @picked_wines = db.execute "SELECT * FROM wines WHERE id = #{params[:id]};"
    db.close
    erb :wines_pick
end


get '/wines_add' do
    erb :wines_add
end


post '/wines_add/new' do
    db = SQLite3::Database.new("wines.db")
    db.results_as_hash = true
    sql = "INSERT INTO wines (grape, year, region, price, currency) \
    VALUES ('#{params[:grape]}', '#{params[:year]}', '#{params[:region]}', '#{params[:price]}', '#{params[:currency]}');"
    puts(sql)
    db.execute(sql)
    db.close
    redirect "/wines"
end


get '/wines_delete/:id' do
    db = SQLite3::Database.new("wines.db")
    db.results_as_hash = true
    @picked_wines = db.execute "DELETE FROM wines WHERE id = #{params[:id]};"
    db.close
    redirect "/wines"
end



get '/wines_edit/:id' do
    db = SQLite3::Database.new("wines.db")
    db.results_as_hash = true
    @wine = db.execute( "SELECT * FROM wines WHERE id = #{params[:id]};" ).first
    db.close
    erb :wines_edit
end

post '/wines_edit/:id' do
    puts params
end

require 'pry'
require 'httparty'
require 'sinatra'
require 'sinatra/reloader'

get "/" do
  erb :home
end

get "/search" do
  erb :search
end

get "/movie" do
  @title = params["title"]
  @url = "http://www.omdbapi.com/?t="
  @movie = HTTParty.get(@url + @title)
  @poster = @movie["Poster"]
  erb :movie
end

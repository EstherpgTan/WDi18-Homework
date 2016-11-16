require 'pry'
require 'httparty'
require 'sinatra'
require 'sinatra/reloader'

get '/' do
  erb :home
end

get "/home" do
  erb :home
end

get "/contact" do
  erb :contact
end

get "/wolves" do
  erb :wolves
end

get "/search" do
  erb :search
end

get "/filmography" do
  @search_param = params["movie_search"]
  @movie = HTTParty.get "http://www.omdbapi.com/?t=#{@search_param}"
  puts @movie
  erb :film
end

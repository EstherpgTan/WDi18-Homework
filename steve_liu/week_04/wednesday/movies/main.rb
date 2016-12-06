require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get "/" do
  erb :home
end
get "/results/:title" do
  title = params["title"]
  url2 = "http://omdbapi.com/?t=#{title}"
  @moviei = HTTParty.get(url2)
  erb :results_individual
  # binding.pry
  # p ""
end

get "/search" do
  erb :search
end

get "/results" do
  @movie_title = params["title"]
  url = "http://omdbapi.com/?s=#{@movie_title}"
  # This is an hash object. The key "Search" has value in form of array of hashes.
  @movies = HTTParty.get(url)["Search"]
  erb :results
end

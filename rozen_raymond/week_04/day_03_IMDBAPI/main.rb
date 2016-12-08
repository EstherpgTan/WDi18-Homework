require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

#Homepage
get "/" do
  erb :home
end


get "/result" do
  @movie_title =""
  @movie_poster=""
  @year=""
  @genre=""
  @duration=""
  @actors=""
  @description=""
  @movie_search = HTTParty.get"http://www.omdbapi.com/?t=#{params['title']}"

  puts @movie_search

  if
    @movie_title = @movie_search["Title"]
    @movie_poster= @movie_search["Poster"]
    @description = @movie_search["Plot"]
    @year= @movie_search["Year"]
    @genre = @movie_search["Genre"]
    @duration = @movie_search["Runtime"]
    @actors = @movie_search["Actors"]
    erb :result

  else
    puts "No movie found"
  end
end

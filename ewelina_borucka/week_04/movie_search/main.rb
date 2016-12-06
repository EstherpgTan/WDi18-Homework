require 'pry'
require 'sinatra'
require 'sinatra/reloader'

require 'httparty'



get "/" do
  erb :home
end


get "/results" do
  movie_name = params["movie"]
  url = "http://www.omdbapi.com/?t=#{movie_name}"
  @movie = HTTParty.get( url )

  erb :results

end

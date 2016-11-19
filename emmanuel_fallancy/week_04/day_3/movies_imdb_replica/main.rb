require "pry"
require "sinatra"
require "sinatra/reloader"
require "httparty"

# Root / Homepage
get "/" do
  erb( :home )
end

# Search
get "/search" do
  #Display the do search
  erb( :search )
end

get "/result" do
  # Get movie name to be shown
  @movie_name = ""
  @poster_img = ""
  @description = ""
  @movie_search = HTTParty.get "http://www.omdbapi.com/?t=#{ params["movie"] }"

  puts @movie_search
  if @movie_search
    @movie_name = @movie_search[ "Title" ]
    @poster_img = @movie_search[ "Poster"]
    @description = @movie_search[ "Plot" ]
    erb( :result )
  else
    "No movie found"
  end
  # Display the result

end

get "/about" do
  erb( :about )
end

get "/contact_us" do
  erb( :contact_us )
end

# Two pages
# The first one shows the form
# The second one shows the results
# I need to handle the submission of the form
#   Using whatever is typed in the form, make a request to OMDB api
#   Make the Hash that was returned accessible by a view
#   Show the information that I care about in the view
#
# make view first using form etc...
# ... then try movies ...
#
#   require 'httparty'
#   movie_name = params["name"]
#
#   url = "http://www.omdbapi.com"
#   @movie = HTTParty.get(url)
#   @movie["Plot"]
#   @movie["Poster"]
#   @movie["Country"]

require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get "/divide" do
  erb :divide
end

get "/results" do
  @first_num = params["first_num"].to_f
  @second_num = params["second_num"].to_f
  erb :results
end



get "/movie" do
  erb :results
end

url = "http://www.omdbapi.com/?t=Satantango"
@movie = HTTParty.get( http://www.omdbapi.com/?t )

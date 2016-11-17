require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get "/" do
  erb :home
end

get "/about" do
  erb :about
end

get "/contact" do
  erb :contact
end

get "/search" do
  erb :search
end

get "/design/:cold" do
  erb :make
end

get "/display" do
  @newArr = []
  @myArr = []
  @imArr = []
  @keyArr = []
  @search = params["movie"]
  @main = HTTParty.get "http://www.omdbapi.com/?s=#{@search}"
  if @main["Response"] != "False"

    @main["Search"].each do |index|
      index.each do |key,value|
        if key === "imdbID"
          @imArr.push(value)
        end
        if key === "Title"
          @keyArr.push(value)
        end
        if key === "Poster"
          @myArr.push(value)
        end
      end
    end
    erb :display
  else
    erb :error
  end

end


get "/insight/:make" do

  @this = params["make"]
  @close = HTTParty.get "http://www.omdbapi.com/?i=#{@this}"
  #@close[title], [Released], [imdbRating], [Plot], [Poster]
  erb :insight
end

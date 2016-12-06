# == Route Map
#
#      Prefix Verb URI Pattern            Controller#Action
# books_index GET  /books/index(.:format) books#index
#  pages_home GET  /pages/home(.:format)  pages#home
#        root GET  /                      pages#home
#        home GET  /home(.:format)        pages#home
#       about GET  /about(.:format)       pages#about
#       books GET  /books(.:format)       books#index
#

Rails.application.routes.draw do
  get 'books/index'

  get 'pages/home'

  root 'pages#home'
  get "/home" => 'pages#home'
  get '/about' => 'pages#about'

  #Read
  get "/books" => 'books#index'

end

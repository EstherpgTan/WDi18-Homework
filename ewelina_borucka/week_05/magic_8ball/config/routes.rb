Rails.application.routes.draw do

  root "pages#home"   # in case there is no page home!!! always go back to home page

  get '/home' => 'pages#home'
  get '/about' => 'pages#about'
  get '/contact' => 'pages#contact'

  get 'random_sentence' => 'pages#random'

end

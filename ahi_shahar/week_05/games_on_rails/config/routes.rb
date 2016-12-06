Rails.application.routes.draw do

  root :to => "pages#home"

  get "/home" => "pages#home"
  get "/games" => "games#index"
  get "/games/magic/" => "games#magic"
  get "/games/magic/answer" => "games#answer"
  get "/games/numbers" => "games#numbers"
end

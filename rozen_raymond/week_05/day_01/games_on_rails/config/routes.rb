# == Route Map
#
# You don't have any routes defined!
#
# Please add some routes in config/routes.rb.
#
# For more information about routes, see the Rails guide: http://guides.rubyonrails.org/routing.html.
#

Rails.application.routes.draw do
  root "pages#home"

  get "/home" => "pages#home"

  get "/magicball" => "pages#magicball"
  post "/magicball/answer" => "pages#answer"

  get "/secretnumber" => "pages#secretnumber"
  post "/secretnumber/:id" => "pages#result"

  get "/rockpaperscissors" => "pages#rockpaperscissors"
  post "/rockpaperscissors/result" => "pages#rockpaperscissors_result"
end

Rails.application.routes.draw do
  # get "/eightball" => "eightball#home"
  get "/eightball/:question" => "eightball#question"

end

# == Route Map
#
#       Prefix Verb   URI Pattern                Controller#Action
# photos_index GET    /photos/index(.:format)    photos#index
#  photos_show GET    /photos/show(.:format)     photos#show
#   photos_new GET    /photos/new(.:format)      photos#new
#  photos_edit GET    /photos/edit(.:format)     photos#edit
#       photos GET    /photos(.:format)          photos#index
#              POST   /photos(.:format)          photos#create
#    new_photo GET    /photos/new(.:format)      photos#new
#   edit_photo GET    /photos/:id/edit(.:format) photos#edit
#        photo GET    /photos/:id(.:format)      photos#show
#              PATCH  /photos/:id(.:format)      photos#update
#              PUT    /photos/:id(.:format)      photos#update
#              DELETE /photos/:id(.:format)      photos#destroy
#        sites GET    /sites(.:format)           sites#index
#              POST   /sites(.:format)           sites#create
#     new_site GET    /sites/new(.:format)       sites#new
#    edit_site GET    /sites/:id/edit(.:format)  sites#edit
#         site GET    /sites/:id(.:format)       sites#show
#              PATCH  /sites/:id(.:format)       sites#update
#              PUT    /sites/:id(.:format)       sites#update
#              DELETE /sites/:id(.:format)       sites#destroy
#         root GET    /                          pages#home
#         home GET    /home(.:format)            pages#home
#        about GET    /about(.:format)           pages#about
#

Rails.application.routes.draw do

  resources :photos
  resources :sites

  root "pages#home"
  get "/home" => "pages#home"
  get "/about" => "pages#about"

  get "/site/:id/photos" => "sites#site_photos"

end

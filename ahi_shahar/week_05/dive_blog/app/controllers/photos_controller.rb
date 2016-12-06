class PhotosController < ApplicationController
  def index
    @photos = Photo.all
  end

  def show
    @photo = Photo.find_by :id => params[:id]
  end


  def new
    @photo = Photo.new
  end

  def create
    photo = Photo.create photo_params
    redirect_to photo
  end

  def edit
    @photo = Photo.find_by :id => params[:id]
  end

  def update
    photo = Photo.find_by :id => params[:id]
    photo.update photo_params
    redirect_to photo
  end

  def destroy
    photo = Photo.find_by :id => params[:id]
    photo.destroy
    redirect_to photos_path()
  end

  private
    def photo_params
      # Strong params (for security) - using whitelisting to guarantee valid data
      params.require(:photo).permit(:description, :photographer, :site_id, :year, :image)
    end

end

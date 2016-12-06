class SitesController < ApplicationController
  def index
    @sites = Site.all
  end

  def show
    @site = Site.find_by :id => params[:id]
  end

  def new
    @site = Site.new
  end

  def create
    site = Site.create site_params
    redirect_to site
  end

  def edit
    @site = Site.find_by :id => params[:id]
  end

  def update
    site = Site.find_by :id => params[:id]
    site.update site_params
    redirect_to site
  end

  def destroy
    site = Site.find_by :id => params[:id]
    site.destroy
    redirect_to sites_path()
  end

  def site_photos
    @site = Site.find_by :id => params[:id]
    @photos = Photo.where :site_id => params[:id].to_i
    # redirect_to "/site/#{@site.id}/photos"
  end

  private
    def site_params
      # Strong params (for security) - using whitelisting to guarantee valid data
      params.require(:site).permit(:name, :location, :tide, :level, :depth, :image)
    end

end

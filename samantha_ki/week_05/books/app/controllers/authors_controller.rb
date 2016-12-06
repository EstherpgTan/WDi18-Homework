class AuthorsController < ApplicationController

  def index
    @authors = Author.all
  end

  def show
    @author = Author.find_by :id => params["id"]
  end

  def new
    @author = Author.new
  end

  def create
    author = Author.create author_params
    redirect_to author
  end

  def edit
    @author = Author.find_by :id => params["id"]
  end

  def update
    author = Author.find_by :id => params["id"]
    author.update author_params()
    redirect_to author
  end

  def destroy
    author = Author.find_by :id => params["id"]
    author.destroy
    redirect_to authors_path()
  end

private
  def author_params
    params.require(:author).permit(:name, :dob, :nationality, :image)
  end
end

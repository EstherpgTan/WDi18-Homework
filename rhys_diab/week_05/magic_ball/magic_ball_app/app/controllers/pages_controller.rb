class PagesController < ApplicationController

    # Define a method (or "action") called "home" in this controller.
    def home
    end

    def fortune
        @destiny = params[:destiny]
    end

end

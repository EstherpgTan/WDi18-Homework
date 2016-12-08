class PagesController < ApplicationController
  def home
  end

  def magicball
  end

  def answer
    @result =""
    x = rand(2)
    if x == 1
      @result = "True that"
    else
      @result = "No way!"
    end
  end

  def result
    compChoice = rand(10)
    userChoice = params["user_choice"].to_i

    if compChoice == userChoice
      @result = "You are correct!"
    else
      @result = "Sorry. Better luck next time!"
    end
  end

  def rockpaperscissors_result
    data = ["Rock", "Paper", "Scissors"]
    randomNum = rand(3)
    @compChoice = data[randomNum]
    @userChoice = params["user_choice2"]

    if @userChoice == @compChoice
      @result2 = "It's a draw!"
    elsif @userChoice == "Scissors" && @compChoice == "Paper"
      @result2 = "You win!"
    elsif @userChoice == "Paper" && @compChoice == "Rock"
      @result2 = "You win!"
    elsif @userChoice == "Rock" && @compChoice == "Scissors"
      @result2 = "You win!"
    else
      @result2 = "You lose!"
    end

    # binding.pry
  end


end

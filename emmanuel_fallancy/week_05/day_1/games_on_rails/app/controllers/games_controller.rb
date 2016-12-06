class GamesController < ApplicationController

  def index
  end

  def magic_8_ball
  end

  def magic_8_ball_result
    @answer = "Sorry but you are giving me hesitation to answer."

    if params[ "question" ].length > 0
      answers = [
                  "It is certain",
                  "It is decidedly so",
                  "Without doubt",
                  "Yes, definitely",
                  "You may rely on it",
                  "As I see it, yes",
                  "Most likely",
                  "Outlook good",
                  "Yes",
                  "Signs point to yes",
                  "Reply hazy try again",
                  "Ask again later",
                  "Better not tell you now",
                  "Cannot predict now",
                  "Concentrate and ask again",
                  "Don't count on it",
                  "My reply is no",
                  "My sources say no",
                  "Outlook not so good",
                  "Very doubtful"
                ]

       @answer = answers.sample
    else
     @answer
    end

  end

  def secret_number
  end

  def secret_number_result
    secretnum = Random.rand 1..10

    if secretnum == params[ "user_pick" ].to_i
      redirect_to "/games/secret_number/win"
    else
      redirect_to "/games/secret_number/lose"
    end

  end

  def lose
  end

  def win
  end

  def rock_paper_scissors
    server_pick = [ "rock", "paper", "scissors" ]
    server_pick.sample
  end

  def rock_paper_scissors_input
    redirect_to "/games/rock_paper_scissors/#{ params[ :user_choice ] }"
  end

  def rock_paper_scissors_play
    @user = params[ "throw" ]
    @server = rock_paper_scissors
    p @user == @server

    if @user == "paper" && @server == "rock" ||
       @user == "rock" && @server == "scissors" ||
       @user == "scissors" && @server == "paper"
       @result = "win"
    elsif @user == @server
      @result = "have a draw"
    else
      @result = "lose"
    end

    puts "#{ @user } || #{ @server }"

    @result
  end

end

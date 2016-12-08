class EightballController < ApplicationController

def home
end

def question
  @question = params[:question]

  answers = ["The future is uncertain", "Of course", "no way!", "it could come true", "maybe tomorrow", "not in this lifetime", "You are better off not knowing!!"]
  @answer = answers.sample

  end
end

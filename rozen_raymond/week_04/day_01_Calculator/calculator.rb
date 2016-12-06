# Calculator
#
# Explanation
#
# You will be building a calculator. A calculator can perform multiple arithmetic operations. Your function should allow the user to choose which operation is expected, enter in the values to perform the operation on, and ultimately view the result.
# Specification:
#
# A user should be given a menu of operations
# A user should be able to choose from the menu
# A user should be able to enter numbers to perform the operation on
# A user should be shown the result
# This process should continue until the user selects a quit option from the menu
# Phase 1
#
# Calculator functionality
# Calculator should be able to do basic arithmetic (+,-, *, /)
# Phase 2
#
# Advanced Calculator functionality
# Calculator should be able to do basic arithmetic (exponents, square roots)

require 'pry'
puts " "
puts "Welcome to Calculator!"
puts " "

def menu
  puts "Please choose the type of operations below"
  puts " (a) - Addiiton"
  puts " (s) - Substraction"
  puts " (m) - Multiplication"
  puts " (d) - Division"
  puts " (e) - Exponent"
  puts " (r) - Square Roots"
  puts " (q) - Quit"
  puts ""

  gets.chomp
end

def add
  puts " "
  puts "What's your first number?"
  first_num = gets.to_f
  puts "What's your second number?"
  second_num = gets.to_f

  total = first_num + second_num

  puts "The total is #{total}"
  puts " "
end

def substract
  puts " "
  puts "What's your first number?"
  first_num = gets.to_f
  puts "What's your second number?"
  second_num = gets.to_f

  total = first_num - second_num

  puts "The total is #{total}"
  puts " "
end

def multiply
  puts " "
  puts "What's your first number?"
  first_num = gets.to_f
  puts "What's your second number?"
  second_num = gets.to_f

  total = first_num * second_num

  puts "The total is #{total}"
  puts " "
end

def divide
  puts " "
  puts "What's your first number?"
  first_num = gets.to_f
  puts "What's your second number?"
  second_num = gets.to_f

  total = first_num / second_num

  puts "The total is #{total}"
  puts " "
end

def exponent
  puts " "
  puts "What's your first number?"
  first_num = gets.to_f
  puts "What's your second number?"
  second_num = gets.to_f

  total = first_num ** second_num

  puts "The total is #{total}"
  puts " "
end

def squareRoot
  puts " "
  puts "What's your number?"
  first_num = gets.to_f

  total = Math.sqrt(first_num)

  puts "The result is #{total}"
  puts " "
end

user_choice = menu()

until user_choice == "q"
  case user_choice
    when "a" then add()
    when "s" then substract()
    when "m" then multiply()
    when "d" then divide()
    when "e" then exponent()
    when "r" then squareRoot()
    else
      puts "Thant's not a valid option"
    end

  user_choice = menu()
end

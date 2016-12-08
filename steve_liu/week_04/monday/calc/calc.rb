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
# Bonus
#
# Mortgage Calculator
#
# Calculate the monthly required payment given the other variables as input (look up the necessary variables)
#
# BMI Calculator
#
# Calculate the body mass index (BMI) for an individual, given their height and weight
#
# Trip Calculator
#
# Calculate a trip time and cost given inputs for
#
# distance
# miles per gallon
# price per gallon
# speed in miles per hour



require "pry"
# Gives us access to binding.pry (like debugger in JS)

puts "Welcome to our calculator"

def menu
  puts ""
  puts "(a) - addition"
  puts "(s) - subtraction"
  puts "(m) - multiply"
  puts "(d) - divide"
  puts "(e) - exponent"
  puts "(r) - square root"
  puts "(q) - quit"
  print "Enter your choice: "
  gets().chomp() # Implicit return
end

def add
  print "What is your first number? "
  first_num = gets.to_f
  print "What is your second number? "
  second_num = gets.to_f
  puts "The result is #{first_num + second_num}"
end

def subtract
  print "What is your first number? "
  first_num = gets.to_f
  print "What is your second number? "
  second_num = gets.to_f
  puts "The result is #{first_num - second_num}"
end

def multiply
  print "What is your first number? "
  first_num = gets.to_f
  print "What is your second number? "
  second_num = gets.to_f
  puts "The result is #{first_num * second_num}"
end

def divide
  print "What is your first number? "
  first_num = gets.to_f
  print "What is your second number? "
  second_num = gets.to_f
  puts "The result is #{first_num / second_num}"
end

def exponent
  print "What is your base number? "
  base_num = gets.to_f
  print "What is your power number? "
  power_num = gets.to_f
  puts "The result is #{base_num ** power_num}"
end

def square_root
  puts "What is your base number? "
  base_num = gets.to_f
  puts "The result is #{Math.sqrt(base_num)}"
end

# Whatever is returned from menu will be saved here
user_choice = menu()


# Keep displaying the menu until the user_choice variable stores the string "q"
until user_choice == "q"
  puts "\t User choice #{user_choice}"
  case user_choice
  when "a" then add()
  when "s" then subtract()
  when "m" then multiply()
  when "d" then divide()
  when "e" then exponent()
  when "r" then square_root()
  else
    puts "That is not a valid option"
  end

  # when the user_choice is "a", call add()
  # otherwise, print out that is an invalid option

  user_choice = menu()
end

puts ""
puts "Thanks for using our calculator"

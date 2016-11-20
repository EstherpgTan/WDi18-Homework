
require 'pry'
puts ""
puts "Welcome to our calculator"

def menu
  puts ""
  puts "(a) - addition"
  puts "(s) - subtraction"
  puts "(m) - multiplication"
  puts "(d) - division"
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


def division
  print "What is your first number? "
  first_num = gets.to_f
  print "What is your second number? "
  second_num = gets.to_f

  puts "The result is #{first_num / second_num}"
end


def multiplication
  print "What is your first number? "
  first_num = gets.to_f
  print "What is your second number? "
  second_num = gets.to_f

  puts "The result is #{first_num * second_num}"
end


# Whatever is returned from menu will be saved here
user_choice = menu()

# Keep displaying the menu until the user_choice variable stores the string "q"
until user_choice == "q"
  case user_choice

  when "a" then add()
  when "s" then subtract()
  when "m" then multiplication()
  when "d" then division()
  else
    puts "That is not a valid option"
  end
  user_choice = menu()
end

puts ""
puts "Thanks for using our calculator"

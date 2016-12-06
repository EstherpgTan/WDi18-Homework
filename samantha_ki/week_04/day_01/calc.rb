require 'pry' # access to binding.pry for debugging

puts "Welcome to our calculator"

def menu
  puts ""
  puts "(a) - addition"
  puts "(s) - subtraction"
  puts "(d) - division"
  puts "(m) - multiplication"
  puts "(e) - exponents"
  puts "(sq) - square roots"
  puts "(q) - quit"
  print "Enter your choice: "
  gets.chomp # Implicit return
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


def divide
  print "What is your first number? "
  first_num = gets.to_f
  print "What is your second number? "
  second_num = gets.to_f

  puts "The result is #{first_num / second_num}"
end


def multiply
  print "What is your first number? "
  first_num = gets.to_f
  print "What is your second number? "
  second_num = gets.to_f

  puts "The result is #{first_num * second_num}"
end


def exponent
  print "What is your first number? "
  first_num = gets.to_f
  print "What is your second number? "
  second_num = gets.to_f

  puts "The result is #{first_num ** second_num}"
end

def root
  print "What number would you like to find the root of? "
  num = gets.to_f

  puts "The result is #{Math.sqrt(num)}"
end

user_choice = menu() # Whatever is returned from menu will be saved here
p user_choice

# Keep displaying the menu until the user choice variable stores the string "q"

until user_choice == "q"
  puts "\t\tUser choice: #{user_choice}"
  case user_choice
  when "a" then add()
  when "s" then subtract()
  when "d" then divide()
  when "m" then multiply()
  when "e" then exponent()
  when "sq" then root()
  else
    puts "That is not a valid option"
  end
  # When user_choice is "a", call add()
  # Otherwise, print out that is an invalid option
  user_choice = menu()
end

puts "" # empty line presto
puts "Thanks for using our calculator"

# think about how to deal with non valid options

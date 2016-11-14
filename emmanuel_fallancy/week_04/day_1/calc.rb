# Gives access to binding.pry (like debugger)
require 'pry'

puts "Welcome to our calculator"

def menu
  puts ""
  puts "(a) - addition"
  puts "(b) - substract"
  puts "(c) - divide"
  puts "(d) - multiply"
  puts "(e) - exponent"
  puts "(f) - square root"
  puts "(q) - quit"
  print "Enter your choice: "
  return gets().chomp()
end

# Add functionality
def add
  print "What is your first number? "
  first_num = gets().to_f()
  print "What is your second number? "
  second_num = gets().to_f()

  puts "The result is #{ first_num + second_num }"
end

# Substract functionality
def substract
  print "What is your first number? "
  first_num = gets().to_f()
  print "What is your second number? "
  second_num = gets().to_f()

  puts "The result is #{ first_num - second_num }"
end

# Divide functionality
def divide
  print "What is your number to be divided? "
  first_num = gets().to_f()
  print "What is your base number for division? "
  second_num = gets().to_f()

  puts "The result is #{ first_num / second_num }"
end

# Multiply functionality
def multiply
  print "What is your first number to be multiplied? "
  first_num = gets().to_f()
  print "What is your second number to be multiplied? "
  second_num = gets().to_f()

  puts "The result is #{ first_num * second_num }"
end

# Exponent functionality
def exponent
  print "What is your number to be exponent? "
  first_num = gets().to_f()
  print "What is the base value of the exponent? "
  second_num = gets().to_f()

  puts "The result is #{ first_num ** second_num }"
end

# Square Root functionality
def squareroot
  print "What is your number to be square root? "
  first_num = gets().to_f()

  puts "The result is #{ Math.sqrt( first_num ) }"
end

user_choice = menu()

# Keep displaying the menu until the user_choice variable stores the string "q"
until user_choice == "q"
  # When user_choice is "a", call add()
  # Otherwise, print out that is an invalid option
  case user_choice
  when "a"
    add()
  when "b"
    substract()
  when "c"
    divide()
  when "d"
    multiply()
  when "e"
    exponent()
  when "f"
    squareroot()
  else
    puts "That is not a valid option"
  end

  user_choice = menu()
end

puts ""
puts "Thanks for using our calculator"

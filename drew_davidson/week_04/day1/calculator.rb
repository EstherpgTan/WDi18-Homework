require 'pry'

puts "welcome to our calculator"

def menu
  puts ""
  puts "(a) - addition"
  puts "(s) - subtraction"
  puts "(m) - multiply"
  puts "(d) - divide"
  puts "(sq) - squared"
  puts "(q) - quit"
  puts "(p) - power of"
  print "Enter Your Choice: "
  gets().chomp()
end

def add
  print "What is your first number? "
  first_num = gets.to_i
  print "What is your second number? "
  second_num = gets.to_f
  puts "The result is #{first_num + second_num}"
end

def subtract
  print "What is your first number? "
  first_num = gets.to_i
  print "What is your second number? "
  second_num = gets.to_f
  puts "The result is #{first_num - second_num}"
end

def multiply
  print "What is your first number? "
  first_num = gets.to_i
  print "What is your second number? "
  second_num = gets.to_f
  puts "The result is #{first_num * second_num}"
end

def divide
  print "What is your first number? "
  first_num = gets.to_i
  print "What is your second number? "
  second_num = gets.to_f
  puts "The result is #{first_num / second_num}"
end

def square
  print "What is your number? "
  first_num = gets.to_i
  puts "The result is #{first_num ** first_num}"
end

def power
  print "What is your first number? "
  first_num = gets.to_i
  print "What is your second number? "
  second_num = gets.to_f
  puts "The result is #{first_num ** second_num}"
end

user_choice = menu()
p user_choice

#keep displaying the menu until user choice variable contains q

until user_choice == "q"

  case user_choice
  when "a" then add()
  when "s" then subtract()
  when "m" then multiply()
  when "d" then divide()
  when "sq" then square()
  when "p" then power()
  else
    puts "That is not a valid option"
  end
  user_choice = menu()
end

puts ""
puts "Thanks for using our calcuator"

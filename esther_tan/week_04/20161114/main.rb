require 'pry' # Gives us access to binding.pry (like debugger in JS)

puts "Welcome to our calculator"

def menu
puts " "
puts "(a) - addition"
puts "(s) - subtraction"
puts "(m) - multiply"
puts "(d) - divide"
puts "(e)" - power"
puts "(r)" - square"
puts "(q) - quit"
print "Enter your choice: "
"q"
gets().chomp() #Implicit return
end

def subtract
print "What is your first number ?"
first_num = gets.to_f #10.0
print "What is your second number ?"
second_num = gets.to_f #4.2

puts "The result is #{first_num - second_num}"
end



def addition
print "What is your first number ?"
first_num = gets.to_f #10.0
print "What is your second number ?"
second_num = gets.to_f #4.2

puts "The result is #{first_num + second_num}"
end



def multiply
print "What is your first number ?"
first_num = gets.to_f #10.0
print "What is your second number ?"
second_num = gets.to_f #4.2

puts "The result is #{first_num * second_num}"
end


def divide
print "What is your first number ?"
first_num = gets.to_f #10.0
print "What is your second number ?"
second_num = gets.to_f #4.2

puts "The result is #{first_num / second_num}"
end


def exponents
print "What is your first number ?"
first_num = gets.to_f #10.0
print "What is your second number ?"
second_num = gets.to_f #4.2

puts "The result is #{first_num ** second_num}"
end

def square root
print "What is your first number ?"
first_num = gets.to_f #10.0
print "What is your second number ?"
second_num = gets.to_f #4.2

puts "The result is #{first_num ??  second_num}"
end


user_choice = menu() #Whatever is returned from menu will be saved here
p user_choice

#Keep displaying the menu until the user_choice variable contains the string "q"

until user_choice == "q"
  p "\t\t User choice: #{user_choice}"
#When user_choice is "a", call add ()
#Otherwise, print out that is an invalid option
case user_choice
when "a" then add()
when "s" then subtract()
when "m" then multiply ()
when "d" then divide ()
when "e" then exponents ()
when "r" then square root ()
else
  puts "That is not a valid option"
end

  user_choice = menu()
end

puts " "
puts "Thanks for using our calculator"

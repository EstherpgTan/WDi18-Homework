## 1 - greeting
# 2 - menu
# 3 - add
# 4 - thank you


require 'pry'
# Gives us access to binding.pry (like debugger in JS)

puts "Welcome to our calculator"

def menu
  puts ""
  puts "(a) - addition"
  puts "(s) - subtraction"
  puts "(m) - multiplication"
  puts "(d) - division"
  puts "(p) - power of"
  puts "(b) - BMI"
  puts "(mr) - morgage repayment"
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

def division
  print "What is your first number? "
  first_num = gets.to_f
  print "What is your second number? "
  second_num = gets.to_f

  puts "The result is #{first_num / second_num}"
end

def power
  print "What is your first number? "
  first_num = gets.to_f
  print "To the power of what number? "
  second_num = gets.to_f

  puts "The result is #{first_num ** second_num}"
end

def bmi
  print "What is your height (in metres)? "
  first_num = gets.to_f
  print "What is your weight (in kg)? "
  second_num = gets.to_f

  puts "The result is #{(second_num / first_num) / first_num}"
end

def mortgage
  print "the principal, or the initial amount you borrowed? "
  principal = gets.to_f
  print "your monthly interest rate. Your lender likely lists interest rates as an annual figure, so you'll need to divide by 12, for each month of the year. "
  interest = gets.to_f
  print "What is the number of payments over the life of the loan? "
  number_of_payments = gets.to_f

  # puts "Your monthly repayment is #{principal(interest(1 + interest) * number_of_payments)/(1 + interest) * number_of_payments - 1)}" #P = L[c(1 + c)n]/[(1 + c)n - 1]
  # L = principal
  # c = interest
end

user_choice = menu() # Whatever is returned from menu will be saved here

# Keep displaying the menu until the user_choice variable stores the string "q"

until user_choice == "q"
  # puts "\t\tUser choice: #{user_choice}"
  case user_choice
  when "a" then add()
  when "s" then subtract()
  when "m" then multiply()
  when "d" then division()
  when "p" then power()
  when "b" then bmi()
  when "mr" then mortgage()
  else
    puts "That is not a valid option"
  end

  user_choice = menu()
end

puts ""
puts "Thanks for using our calculator"

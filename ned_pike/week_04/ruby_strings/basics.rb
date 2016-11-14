require 'pry'

puts "welcome to our calculator"

def menu
  puts ""
  puts "(a) Addition"
  puts "(s) Subtract"
  puts "(m) multiply"
  puts "(d) divide"
  puts "(ex) - Exponent"
  puts "(sqrt) - Square root"
  puts "(q) - quit"

  print "Enter your choice: "
  puts "Type menu to see this again"
  gets.chomp
end

def exponent
  print "First number "
  first_num = gets.to_i
  print "Second number "
  second_num = gets.to_i
  puts " "
  puts "The result is #{first_num**second_num}"
end

def square_root
  print "First number "
  first_num = gets.to_f
  puts " "
  puts "The result is #{Math.sqrt(first_num)}"
end

def add
  puts "the result is #{numbers.inject(:+)}"
end

def subtract
  puts "the result is #{numbers.inject(:-)}"
end

def multiply
  puts "the result is #{numbers.inject(:*)}"
end

def divide
  puts "the result is #{numbers.inject(:/)}"
end

def numbers
  print "Type your numbers separated by spaces "
  first_num = gets.chomp
  myArr = first_num.split(" ")
  newArr = []
  myArr.each {|n| newArr.push(n.to_i)}
  return newArr
end

user_choice = menu()
until user_choice == "q"

  case user_choice
  when "a" then add()
  when "m" then multiply()
  when "s" then subtract()
  when "d" then divide()
  when "ex" then exponent()
  when "sqrt" then square_root()
   else
    puts "not valid"
  end
  user_choice = menu()
end

puts ""
puts "Thanks for using our calculator"

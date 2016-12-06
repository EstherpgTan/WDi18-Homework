require 'pry'

puts ""
puts "Welcome to the BMI calculator!"

def menu
  puts ""
  puts "(f) - female"
  puts "(m) - male"
  puts "(q) - guit"
  print "Enter your gender: "
  gets().chomp()
end


# def info_goodbye(index_bmi)
#   if index_bmi < 25 && user_choice == "f"
#     puts "Awesome!"
#   elsif index_bmi > 26 && user_choice == "f"
#     puts "Great!"
#   else
#     puts "yo!"
#   end
# end


def bmi
  print "What is your weight? " # kg
  weight_kg = gets.to_f
  print "What is your height in m? "
  height_m = gets.to_f

  index_bmi = weight_kg / (height_m * height_m)
  index_round = index_bmi.round(2)
  puts "Your index is #{index_round}"
  # info_goodbye(index_bmi)
end

# Whatever is returned from menu will be saved here
user_choice = menu()


if user_choice == "f" || user_choice == "m"
  puts "Great we can start!"
  bmi()
  puts "Thanks! Stay fit"
elsif user_choice == "q"
  puts "Goodbye! Thanks for visiting!"
else
    puts "That is not a valid option"
    user_choice = menu()
end


# puts ""
# puts "Thanks! Stay fit"

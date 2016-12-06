# bmi

puts "Hi, fatty!"

def menu
  puts ""
  puts "Do you want to know your BMI? (Y/N)"
  gets.chomp.upcase
end

def calc


  puts "what is your height in metres?"
  user_height = gets.to_f

  puts "what is your weight in kilograms"
  user_weight = gets.to_i

bmi = (user_weight / user_height**2).round(2)

  puts ""
  puts "Your BMI is #{bmi}"
end

user_in = menu()

until user_in == "N"

  case user_in
  when "Y" then calc()
  else
    "Invalid option"
  end
    user_in = menu()
end

puts ""
puts "Go train."

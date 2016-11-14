require 'pry' # Gives us access to binding.pry (like debugger in JS)
require 'rainbow/ext/string' # Gives access to rainbow gem
require 'rainbow'

puts "Welcome to our calculator"

def menu
  puts ""
  puts "(a) - adition".color(:green)
  puts "(r) - reduction".color(:green)
  puts "(m) - multiplication".color(:green)
  puts "(d) - devision".color(:green)
  puts "(md) - modulos".color(:green)
  puts "(sqrt) - square root".color(:green)
  puts "(xp) - exponent".color(:green)
  puts "(mortgage) - mortgage".color(:blue)
  puts "(BMI) - BMI calculator".color(:yellow)
  puts "(trip) - Trip Calculator".color(:silver)
  puts "(q) - quit".color(:red)
  print "Enter your choise: "
  gets().chomp() #Implicit return
end

def add (array)
  puts "The result of #{array[0]} + #{array[1]} = #{Rainbow(array[0] + array[1]).underline}"
end

def subtract(array)
  puts "The result of #{array[0]} - #{array[1]} = #{Rainbow(array[0] - array[1]).underline}"
end

def multi(array)
  puts "The result of #{array[0]} * #{array[1]} = #{Rainbow(array[0] * array[1]).underline}"
end

def devide(array)
  puts "The result of #{array[0]} / #{array[1]} = #{Rainbow(array[0] / array[1]).underline}"
end

def modulos(array)
  puts "The leftover of #{array[0]} / #{array[1]} = #{Rainbow(array[0] % array[1]).underline}"
end

def sqr_rt (array)
  puts "The square root of #{array[0]} = #{Rainbow(Math.sqrt(array[0])).underline}"
end

def exponent (array)
  i=2
  result = array[0]
  while i <= array[1] do
    result *= array[0]
    i += 1
  end
  puts "#{array[0]} to the #{array[1]} power is equal to #{Rainbow(result).underline}"
  return result
end

def call_numbers (user_choice)
  array = []
  print "What is your first number? "
  array.push(gets.to_f)
  if user_choice != "sqrt"
    print "What is your second_number? "
    array.push(gets.to_f)
  end
  puts ""
  return array
end
user_choice = menu()

def mortgage
  print "How much do you need to loan? "
  loan_ammount = gets.to_f
  print "What is the AIT (annual interest rate) you were offered? "
  a_i_t = (gets.to_f)/100
  print "Life Loan (in years)? "
  life_loan  = gets.to_f
  print "How many payments would you pay yearly? (monthly = 12, forthnightly = 26, weekly = 52)? "
  pay_period  = gets.to_f
  number_of_payments = life_loan * pay_period
  rate = a_i_t/pay_period # calculates the periodic rate
  array = [] # the next 3 lines will creat an array with the needed value to generate the exponent in the formula using our own generic oxponent function
  array.push(1+rate)
  array.push(number_of_payments)
  payment = loan_ammount * ( rate * exponent(array) ) / ( exponent(array) - 1 ) #mortgage repayment eligible formula
  puts "your pay per term will be #{payment.to_i} and you will pay #{(payment*number_of_payments-loan_ammount).to_i} in interest"
end

def b_m_i
  print "What is your height in meters? "
  height = gets.to_f
  print "what is your weight in kg? "
  weight = gets.to_f
  print "what is your age? "
  age = gets.to_i
  age_bonus = ((age-15)/10).to_i #calculates BMI bonuses according to ages
  bmi_value = weight/(height*height) + age_bonus #calculates BMI with bonuses

  if bmi_value >= 19 && bmi_value <= 24.9
    result = "normal weight"
  elsif bmi_value <= 29.9
    result = "Overweight"
  elsif bmi_value <= 34.9
    result = "Obesity level I"
  elsif bmi_value <= 39.9
    result = "Obesity level II"
  elsif bmi_value >= 40
    result = "Obesity level III"
  else
    result = "something went wrong..."
  end
  puts result
end

def trip_planner
  print "How long is the trip? (in km) "
  distance = gets.to_f
  print "How many km does the car do per litre? "
  kmpl = gets.to_f
  print "How much does a litre of petrol costs on average? "
  cost_lr = gets.to_f
  print "Whats the average traveling speed? (in km) "
  avg_speed = gets.to_f

  trip_time = (distance / avg_speed).to_f
  trip_cost = distance / kmpl * cost_lr

  puts "the trip will take about #{trip_time} hours, and will cost about #{trip_cost}$ plus another #{(trip_cost/5).to_i}$ for snacks!"
end

#keep running the menu until user_choice is equal to q
until user_choice == "q"
  p user_choice

  case user_choice
    when "a" then add(call_numbers(user_choice))
    when "r" then subtract(call_numbers(user_choice))
    when "m" then multi(call_numbers(user_choice))
    when "d" then devide(call_numbers(user_choice))
    when "md" then modulos(call_numbers(user_choice))
    when "sqrt" then sqr_rt (call_numbers(user_choice))
    when "xp" then exponent (call_numbers(user_choice))
    when "mortgage" then mortgage()
    when "BMI" then b_m_i()
    when "trip" then trip_planner()
    else print "this is not an option, try again "
  end
  user_choice = menu()
end

puts ""
puts "Thanks for using our calculator"

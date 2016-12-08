# Calculate BMI
  # metric
    # input: kg and m
    # formula: kg / (m * m)
      # case to return bmi range

  # imperial
    # input: pounds and inches
    # formula: (pounds * 703) / (inches * inches)

require 'pry'


## INTRO ##

puts "Welcome to the BMI Calculator - prepare to get judged"

def menu
  puts ""
  puts "(m) - for metric calculation eg. kilograms and metres"
  puts "(i) - for imperial calculation eg. pounds and inches"
  puts "(q) - quit"
  print "Enter your choice: "
  gets.chomp.downcase
end

user_choice = menu()


## FUNCTIONS ##

  # Output Message #
def bmi_message(bmi, category)
  puts "BMI of #{bmi} is categorised as #{category}"
end

  # Ask for & store user input #
def get_weight(unit)
  puts "Enter your weight in #{unit}"
  weight = gets.to_f
  return weight
end

def get_height(unit)
  puts "Enter your height in #{unit}"
  height = gets.to_f
  return height
end

  # Determining BMI within range #
def bmi_check(bmi)
  if bmi < 18.5 then bmi_message(bmi, "underweight")
  elsif bmi >= 18.5 && bmi <= 24.9 then bmi_message(bmi, "normal")
  elsif bmi >= 25 && bmi <= 29.9 then bmi_message(bmi, "overweight")
  else bmi_message(bmi, "obese")
  end
end


## Calculating BMI based on Metric inputs ##

def metric
  weight = get_weight("kg")
  height = get_height("m")

  bmi = "#{weight / (height * height)}"
  puts "Your BMI is: #{bmi}"
  return bmi
end

def test_bmi_m
  bmi = metric.to_f
  bmi_check(bmi)
end


## Calculating BMI based on Imperial inputs ##

def imperial
  weight = get_weight("pounds")
  height = get_height("inches")

  bmi = "#{(weight * 703) / (height * height) }"
  puts "Your BMI is: #{bmi}"
  return bmi
end

def test_bmi_i
  bmi = imperial.to_f
  bmi_check(bmi)
end


## Loop until user quits ##

until user_choice == "q"
  case user_choice
  when "m" then test_bmi_m()
      when "i" then test_bmi_i()
      else
        puts "That's not an option... try again."
      end
    user_choice = menu()
end

puts ""
puts "Thanks for using the BMI calculator, but this doesn't really mean much. Go see a doctor, or eat a burger. Whatevs."

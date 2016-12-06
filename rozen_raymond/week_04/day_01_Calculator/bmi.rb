# BMI Calculator
#
# Calculate the body mass index (BMI) for an individual, given their height and weight

puts "BMI Calculator"
puts ""

puts "Please enter your weight (in kg)"
weight = gets.to_f

puts "Please enter your height (in m)"
height = gets.to_f

bmi = (weight) / (height * height)
bmi = bmi.to_i

puts ""
puts "Your BMI is #{bmi}"

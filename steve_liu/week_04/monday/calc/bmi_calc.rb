# BMI Calculator
#
# Calculate the body mass index (BMI) for an individual, given their height and weight

print "Enter your weight (kg): "
weight = gets.to_f
print "Enter your height (m): "
height = gets.to_f

bmi = weight /height / height

puts "Your BMI is #{bmi}"

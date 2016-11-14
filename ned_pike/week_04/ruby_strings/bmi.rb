puts "Hi i'm jerry ad I'll be walking you through our BMI calculator"
puts " "
print "Firstly I'll need your weight (Don't worry I won't tell) "
weight = gets.to_f
print "Next I'll need your height in metres "
height = gets.to_f
bmi = weight / (height**2)
bmi = sprintf('%.2f', bmi)
if bmi.to_f > 30
  puts "Obese"
elsif bmi.to_f >= 25.9
  puts "Overweight"
elsif bmi.to_f >= 18.5
  puts "Healthy weight range"
elsif bmi.to_f < 18.5
  puts "underweight"
end

puts "This is Jerry signing off have a good one"

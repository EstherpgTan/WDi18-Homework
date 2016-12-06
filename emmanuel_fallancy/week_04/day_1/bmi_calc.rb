# BMI Calculator
puts "Welcome to the (so called) awesome BMI Calculator"

# function to calculate the BMI
def calculate( height, weight )
  bmi = ( weight / height ) / height
  return bmi
end

# Splash screen for getting the input for height and weight
def splash
  print "What is your height (in m)? "
  height = gets().to_f()

  print "What is your weight (in kg)? "
  weight = gets().to_f

  bmi = calculate( height, weight )
  puts "Your BMI is #{ bmi.round( 2 ) }."

  if bmi >= 20 && bmi <= 25
    puts "BMI status: Healthy"
  else
    puts "Please take care of your health"
  end
end

# Call the function
splash()

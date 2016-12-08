# Mortgage Calculator
# Inputs...
# M = monthly payment
# P = principal
# r = rate ( in % )
# n = number of total repayment ( years * 12 )

puts "Welcome to the Mortgage Calculator"
puts ""

# Main starting/menu prompt
def splash
  print "Would you like to have a go with the mortgage calculator? (y/n) "
  user_input = gets().chomp().downcase()
  print "\n" #new line

  while user_input != "n"
    print "What is the principal value? "
    principal = gets().to_i()

    print "What is the monthly rate(%)? "
    monthlyrate = gets().to_f()

    print "How long would you like to pay the mortgage (in years)? "
    years = gets().to_i()

    # Get the total payment and print out the result
    totalpayment = calcMortgage( principal, monthlyrate, years )
    puts "The monthly commitment would be $#{ totalpayment }."
    print "\n" # new line

    print "Would you like to have another go with the mortgage calculator? (y/n) "
    user_input = gets().chomp().downcase()
    print "\n" # new line
  end
end

# Calculate the monthly payment
def calcMortgage( principal, monthlyrate, years )
  # Count the rate divided by 12 months - Float value
  rate = ( monthlyrate.to_f() / 100 ) / 12

  # Total number of payment(s)
  n = years * 12

  # Monthly Payment formula
  monthlyPayment = principal * ( ( rate * ( ( 1 + rate ) ** n ) ) / ( ( ( 1 + rate ) ** n ) - 1 ) )

  return monthlyPayment.round( 2 )
end

# Call the mortgage calculator
splash()

puts "Thank you for using the mortgage calculator"
puts ""

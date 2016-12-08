# Mortgage Calculator
#
# Calculate the monthly required payment given the other variables as input (look up the necessary variables)
#

print "Enter amount you wish to borrow: "
amount_borrowed = gets.to_f
print "Enter repayment duration (years): "
duration_years = gets.to_f
print "Enter your annual interest rate (eg 9): "
rate_yearly = gets().to_f
rate_monthly = rate_yearly/12.0

repayment_monthly = amount_borrowed / 12 / duration_years * (1+rate_monthly)
puts repayment_monthly

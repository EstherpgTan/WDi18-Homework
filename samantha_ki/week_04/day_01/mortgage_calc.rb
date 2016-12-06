# Variables
  # Loan Amount
  # Property value
  # Loan Term
  # Repayment Frequency
  # Interest Rate
# Equation: M = P * ( (r (1+r) ^n) / (1+r)^n -1) )
  # M = monthly payment
  # P = principal
  # r = monthly interest rate (calculated by dividing your annual interest rate by 12)
  # n = number of payments (the number of months you will be paying the loan)

# Results
  # Total Interest Payable $X over X years
  # Regular Repayments $X /month at interest rate

require 'pry'

puts "Welcome to the Mortage Repayment Calculator - You're a real adult now!"

def menu
  puts ""
  puts "(c) - calculate my living hell"
  puts "(q) - we done here"
  print "Enter your choice: "
  gets.chomp
end

def calculate
  print "What is your mortgage debt? "
  debt = gets.to_f
  print "What is your monthly interest rate? "
  interest = gets.to_f
  interest = interest/100
  print "How long will you be paying for this? In months plz"
  num_of_payments = gets.to_f

  puts "#{debt * ( (interest * (1 + interest)** num_of_payments) / (1 + interest)** num_of_payments - 1)}"
end

calculate()

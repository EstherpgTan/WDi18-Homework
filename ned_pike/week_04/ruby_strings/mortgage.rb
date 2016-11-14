# M is your monthly payment.
# P is your principal.
# r is your monthly interest rate, calculated by dividing your annual interest rate by 12.
# n is your number of payments (the number of months you will be paying the loan)[6]
puts "I'm Here to help you work out your monthly payments "
print "What is the size of the loan "
principal = gets.to_f
print "What is you you interest rate "
monthly_interest = gets.to_f / 12
print "How many years is the loan "
number_months = gets.to_f * 12
firstPart = monthly_interest * (1 + monthly_interest) ** number_months
secondPart = (1 + monthly_interest) ** number_months - 1
thirdPart = principal * (firstPart/secondPart)
puts "You will need to pay $#{sprintf('%.2f', thirdPart)} a month. For a total of $#{sprintf('%.2f', (thirdPart * number_months))}"

# Welcome

puts ""
puts "Welcome to the loan calculator"

# Menu

def menu
  puts ""
  puts "Would you like to use the mortage calculator? (Y/N)"
  gets.chomp.upcase
end


# Calculator

def calc
# Inputs
  print "Input loan amount in $: "
  amount = gets.to_i

  print "Input the length of loan in years: "
  years = gets.to_i
  term = years * 12

  print "Input the interest rate in %: "
  percentage = gets.to_f
  interest = (percentage / 12) / 100

# Calculations
  top_eq = interest * ((1 + interest) ** term)
  bottom_eq = (1 + interest)**term - 1

  right_eq = top_eq / bottom_eq

  #
  monthly_repayments = (amount * right_eq).round(2)
  total = (monthly_repayments * term).round(2)
  total_interest = (total - amount).round(2)

# Results
  puts ""
  puts "Your monthly repayments will be $#{monthly_repayments}."
  puts "The total paid over #{years} years will be $#{total}."
  puts "At #{percentage}%, the total amount of interest paid will be $#{total_interest}."
end

# Loop

user_choice = menu()

until user_choice == "N"

  case user_choice
  when "Y" then calc()
  else
    puts "Please input 'Y' or 'N'"
  end
  user_choice = menu()
end

puts ""
puts "Thanks for stopping by!"

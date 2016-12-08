# Trip Calculator
#
# Calculate a trip time and cost given inputs for
#
# distance
# miles per gallon
# price per gallon
# speed in miles per hour
puts ""
puts "Welcome to the 'Trip' calculator"
puts " "

puts "What is the distance(in miles)?"
distance = gets.to_f

puts "What is the miles per gallon?"
miles = gets.to_f

puts "What is the price per gallon?"
price = gets.to_f

puts "What is the speeds in miles per hour?"
speed = gets.to_f

time = (1/(speed))*distance
cost = (miles)/(price)

puts " "
puts "The total time taken for your trip is #{time} hour"
puts "The total cost for your trip is $#{cost}"
puts "Have a great trip ahead!! :)"

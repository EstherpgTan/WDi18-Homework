# Trip Calculator
#
# Calculate a trip time and cost given inputs for
#
# distance
# miles per gallon
# price per gallon
# speed in miles per hour

print "Enter distance (miles): "
distance = gets.to_f
print "Enter car mileage per gallon: "
mileage = gets.to_f
print "Enter price per gallon: "
price = gets.to_f
print "Enter speed in miles per hour: "
speed = gets.to_f

puts "The trip should take #{distance / speed} hours and cost $#{distance/mileage*price}."

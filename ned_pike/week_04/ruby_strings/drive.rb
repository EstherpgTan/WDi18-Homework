# Calculate a trip time and cost given inputs for
# distance
# miles per gallon
# price per gallon
# speed in miles per hour
puts "I'm Here to help you work out you trip "
print "How far is the trip? "
distance = gets.to_f
print "How many miles per gallon is your vehicle "
mpg = gets.to_f
print "What is the price per gallon"
ppg = gets.to_f
print "what is the average speed "
speed = gets.to_f
trip_time = distance / speed
total_gallons = distance / mpg
cost = ppg * total_gallons
sec = (trip_time * 3600).to_i
min, sec = sec.divmod(60)
hour, min = min.divmod(60)
trip_time = "%2d hours, %2d minutes and %2d seconds" % [hour, min, sec]
puts "The trip will take #{trip_time} and will cost $#{sprintf('%.2f',cost)} safe travels!"

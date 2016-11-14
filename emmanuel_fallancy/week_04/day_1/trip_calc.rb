# Calculate the fuel cost and travel time
puts "Welcome to the Trip Calculator"
puts ""

# The menu screen
def splash
  print "Please choose the metric calculation (km/miles)... "
  metric = gets().chomp()

  if metric != "km" && metric != "miles"
    splash()
  end

  print "What is the travel distance (#{ metric })? "
  distance = gets().to_f()

  print "What is the fuel efficiency per gallon (#{ metric })? "
  distancePerGallon = gets().to_f()

  print "What is the fuel price per gallon? "
  pricePerGallon = gets().to_f()

  print "What is the average speed per (#{ metric }) ? "
  speed = gets().to_f()

  fuelcost = calculateFuelCost( distance, distancePerGallon, pricePerGallon )
  traveltime = calculateTravelTime( distance, speed )

  puts ""
  puts "The fuel would approximately cost at $#{ fuelcost }."
  puts "The travel time is estimated to be #{ traveltime } hour(s)."
  puts "However, these are just rough estimation which varies on driving pattern."
end

def calculateFuelCost( distance, distancePerGallon, pricePerGallon )
  # Cost = ( Distance * Price per gallon ) / Efficiency
  cost = ( distance * pricePerGallon ) / distancePerGallon

  return cost.round( 2 )
end

def calculateTravelTime( distance, speed )
  time = distance / speed

  return time.round( 2 )
end

# Call the menu/prompt
splash()

puts ""
puts "Thank you for using the Trip Calculator"

# MTA Line

# Lines and its station
def lines_and_stations
  lines_stations = {
                     :n => [
                             "Times Square",
                             "34th",
                             "28th",
                             "23rd",
                             "Union Square",
                             "8th"
                           ],
                     :six => [
                                "Grand Central",
                                "33rd",
                                "28th",
                                "23rd",
                                "Union Square",
                                "Astor Place"
                              ],
                      :l => [
                              "8th",
                              "6th",
                              "Union Square",
                              "3rd",
                              "1st"
                             ]
                    }

  return lines_stations
end

# Plan the trip
def plan_trip( line_start, station_start, line_end, station_end )
  # Do Line validation
  return "No station line found" if !lines_and_stations.keys.include?( line_start ) || !lines_and_stations.keys.include?( line_end )

  # Get me the line and station
  is_same_line = line_start == line_end
  union_square = "Union Square"
  stations = []

  # Sometimes, we like to mess around so why not just do the checking
  if is_same_line && station_start == station_end
    return "You are in the same station"
  elsif !is_same_line && station_start == union_square && station_end == union_square
    return "You are in the same station. It is the intersection station."
  end

  # If the same line, just move towards the destination
  if is_same_line
    stations = move_to_station( line_start, station_start, station_end )

    # If no stations found, return a message to inform no stations found
    return "Either one of the stations not belonging to the line specified" if stations.size == 0

  else
    # Get the first part of the station line then get the second
    first_line = move_to_station( line_start, station_start, union_square )
    second_line = move_to_station( line_end, union_square, station_end )

    # If no stations found, return a message to inform no stations found
    return "Either one of the stations not belonging to the line specified" if first_line.size == 0 || second_line.size == 0

    # Removing the Union Square in the front as it is the intersection
    second_line.shift

    # Get all the stations
    stations = first_line + second_line
  end

  return display_trip( line_start, line_end, stations )
end

# Move forth in the line
def move_to_station( line, station_start, station_end )
  startIndex = lines_and_stations[ line ].index( station_start )
  endIndex = lines_and_stations[ line ].index( station_end )
  stations = []

  # If no stations found in the line, return empty array
  return stations if startIndex == nil || endIndex == nil

  if endIndex > startIndex
    while startIndex <= endIndex
      # puts lines_and_stations[ line ][ startIndex ]
      stations.push( lines_and_stations[ line ][ startIndex ] )
      startIndex += 1
    end
  elsif startIndex > endIndex
    while startIndex >= endIndex
      # puts lines_and_stations[ line ][ startIndex ]
      stations.push( lines_and_stations[ line ][ startIndex ] )
      startIndex -= 1
    end
  end

  return stations
end

# Show the journey
def display_trip( line_start, line_end, stations )
  is_same_line = line_start == line_end
  line_start_name = line_name( line_start )
  line_end_name = line_name( line_end )
  first_line_stations = ""

  message = ""
  if is_same_line
    first_line_stations = stations[ 1..stations.size - 1 ].join( ", " )
    message = "From station #{ stations.first } in Line #{ line_start_name }, continue your journey to: #{ first_line_stations }\n"

    message += "Total stops: #{ stations.size }"
  else
    first_line_stations = stations[ 1..stations.index( "Union Square" ) ].join( ", ")

    second_line_stations = stations[ stations.index( "Union Square" ) + 1..stations.size - 1 ].join( ", ")

    message = "From station #{ stations.first } in Line #{ line_start_name }, continue your journey to: #{ first_line_stations }\n"

    message += "Stop at Union Square.\nChange to line #{ line_end_name } and continue your journey to: #{ second_line_stations }\n"

    message += "Total stops: #{ stations.size }"
  end

  return message
end

# Just a function to convert the symbol to return string name (appropriately)
def line_name( line )
  line_name = ""

  if line.to_s == "n"
    line_name = "N"
  elsif line.to_s == "six"
    line_name = "6"
  elsif line.to_s == "l"
    line_name = "L"
  end

  return line_name
end

# Valid scenario
puts plan_trip( :six, "28th", :l, "6th")
puts "---"
# False scenario
puts plan_trip( :l, "Unio Square", :six, "Union Square" )

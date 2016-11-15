require 'pry'

travelling = "Y"

def line_n
  ["Times Square", "34th", "28th N", "23rd N", "Union Square", "8th N"]
end

def line_l
  ["8th", "6th", "Union Square", "3rd", "1st"]
end

def line_6
  ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
end

def find_interchange (start_line, end_line)
  return start_line & end_line
end

def find_line (station)
  if line_6.include?(station)
    return line_6(),"6 Line"
  elsif line_l.include?(station)
    return line_l(),"L Line"
  elsif line_n.include?(station)
    return line_n(),"N Line"
  else
    return "",""
  end
end

def trim_lines (line, station, interchange, first_part_of_trip)
  station_index = line.index(station)
  interchange_index = line.index(interchange)
  line.reverse! if(station_index > interchange_index) && first_part_of_trip
  line.reverse! if(station_index < interchange_index) && !first_part_of_trip
  station_index = line.index(station)
  interchange_index = line.index(interchange)
  new_line = line.slice!(station_index..interchange_index) if first_part_of_trip == true
  new_line = line.slice!(interchange_index..station_index) if first_part_of_trip == false
  new_line.pop
  new_line.shift
  return new_line
end
# call the user and ask him to input lines
def call_user
  print "\n\tN-Line: #{line_n.join(", ")}\n"
  print "\n\tL-Line: #{line_l.join(", ")}\n"
  print "\n\t6-Line: #{line_6.join(", ")}\n"
  print "\n\twhich station are you travelling from? "
    start = gets.chomp()
  print "\n\tWhich station are you traveling to? "
    stop = gets.chomp()
  return start,stop
end

# Find the interchange where the lines meet,
# send the lines to the trimmed before and beyond the required stops
# Counts how many stop left in the on the lines.
def interchange_and_stops(start_line,start,end_line,stop)
  interchange = find_interchange(start_line,end_line)[0]
  start_line = trim_lines(start_line, start, interchange, true) # check directions
  end_line = trim_lines(end_line, stop, interchange, false) # for both lines
  total_stops = start_line.length + end_line.length + 1
  return interchange, start_line, end_line, total_stops
end

# an
def single_line_trip(start_line,start,stop)
  start_index = start_line.index(start)
  stop_index = start_line.index(stop)
  start_line.reverse! if(start_index > stop_index)
  start_index = start_line.index(start)
  stop_index = start_line.index(stop)
  line = start_line.slice!((start_index+1)..(stop_index-1))
  return line
end

while (travelling == 'Y')
  start, stop = call_user
  start_line,name_start_line = find_line(start)
  end_line,name_end_line = find_line(stop)
  if name_start_line == "" || name_end_line == ""
    puts "\n\tInvalid Station"
  elsif start == stop
    puts "\n\tYou're an idiot"
  elsif name_start_line != name_end_line && start != "Union Square"
    interchange, start_line, end_line, total_stops = interchange_and_stops(start_line,start,end_line,stop)
    puts "\n \t You are traveling from #{start} on the #{name_start_line}, \n
    continue through #{start_line.join(", ")} and change trains to #{name_end_line} at: #{interchange}. \n
    continue your journey through #{end_line.join(", ")} all the way to #{stop}. \n
    You have #{total_stops} stop(s) on your journey, good luck.\n"
  else
    start_line = end_line  if start == "Union Square"
    line = single_line_trip(start_line,start,stop)
    puts "\n \t You are traveling on line #{name_start_line} from #{start}. \n
    contine through #{line.join(", ")} all the way to #{stop}.\n
    You have #{line.length+1} stops on your way, good luck!\n"
  end
    puts ""
    print "Would you like to plan another trip? Y/N "
  travelling = gets.chomp()
end

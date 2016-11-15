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
  return line_6(),"6 Line" if line_6.include?(station)
  return line_l(),"L Line" if line_l.include?(station)
  return line_n(),"N Line" if line_n.include?(station)
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

while (travelling == 'Y')
  print "which station are you travelling from? "
    start = gets.chomp()
  print "Which station are you traveling to? "
    stop = gets.chomp()
  start_line,name_start_line = find_line(start)
  end_line,name_end_line = find_line(stop)
  interchange = find_interchange(start_line,end_line)[0]
  start_line = trim_lines(start_line, start, interchange, true) # check directions
  end_line = trim_lines(end_line, stop, interchange, false) # for both lines
  total_stops = start_line.length + end_line.length - 1
  puts "\n \t You are traveling from #{start} on the #{name_start_line}, \n
  continue through #{start_line.join(", ")} and change trains to #{name_end_line} at: #{interchange}. \n
  continue your journey through #{end_line.join(", ")} all the way to #{stop}. \n
  you have #{total_stops} on your journey, good luck.\n"
  puts ""
  print "Would you like to plan another trip? Y/N "
  travelling = gets.chomp()
end

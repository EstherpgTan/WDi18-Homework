
require 'pry'
origin_stop = "Times Square"
origin_line = "N"

# ---------- Defining Lines and Stops ------------------------
def get_subway_lines
  subway_lines ={
    "N" =>["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    "L" =>["8th", "6th", "Union Square", "3rd", "1st"],
    "SIX" =>["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
  }
end


def next_stop(index_current_stop)
  index_next_stop = index_current_stop + 1
end
def previous_stop(index_current_stop)
  index_previous_stop = index_current_stop - 1
end

def plan_trip (start_line, start_station, end_line, end_station)
  subway_lines = get_subway_lines()
  index_start_station = subway_lines["#{start_line}"].index(start_station)
  index_end_station = subway_lines["#{end_line}"].index(end_station)
  index_current_station = index_start_station

    if start_line == end_line
      if index_current_station < index_end_station
        index_next_station = next_stop(index_current_station)
        index_current_station = index_next_station
        puts index_current_station
      end

    end

end

print "Enter your current line (N, L, SIX): "
current_line = gets().chomp()
print "Enter your current stop: "
current_stop = gets().chomp()
print "Enter destination line"
destination_line = gets().chomp()
print "Enter destination stop "
destination_stop = gets().chomp()

binding.pry

puts ""

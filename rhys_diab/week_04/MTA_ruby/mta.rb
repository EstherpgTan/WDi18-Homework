
require "pry"
# plan_trip( :n, "Times Square", :l, "Grand Central" )


# Create hash with each line and an array as the value of each line which
#lists all the stops in order

all_trips = {
  "N line" => ["Time Square", "34th", "28thNL", "23rdNL", "Union Square" "8thNL"],
  "L line" => ["8thLL", "6th", "Union Square", "3rd", "1st"],
  "6 line" => ["Grand Central", "33rd", "28th6L", "23rd6L", "Union Square", "Astor Place"]
}

## Example trip
  ## I get on at Time Square and want to go to 1st
  ## all_trips["N line"][0] to all_trips["L line"][4]
  ##trip is

  # all_trips["N line"][0] all_trips["N line"][1] all_trips["N line"][2] all_trips["N line"][3]
  #                                                                       all_trips["L line"][2] all_trips["L line"][3] all_trips["L line"][4]


  puts all_trips["N line"].index("Time Square")
# 1) Determine if destination stop is on the same line as beggining stop
  def same_line_test

  if (plan_trip[:on_line] == (plan_trip)[:off_line])
    same_line_trip1()

  else different_line_trip
  end

  def same_line_trip

    # determine if index of destination stop > index of beginning stop

    # if index of destination stop is > index of beginning stop
    # total no. of stops = index of destination stop - index of beginning stop

    #if index of destination stop is <index of beginning stop
    # total no. of stops = index of beginning stop - index of destination stop

  if all_trips[:off_line].index(stop_off) > all_trips[:on_line].index(stop_on)
  total_number_of_stops = all_trips[:off_line].index(stop_off) - all_trips[:on_line].index(stop_on)
  put "Your trip has #{total_number_of_stops}"
  else total_number_of_stops = all_trips[:off_line].index(stop_off) - all_trips[:off_line].index(stop_off)
  put "Your trip has #{total_number_of_stops}"
  end

# 2) If stops are on a different line work out index of Union Square on your current line
    # If index of beginning stop > index of Union Square on that line
    # no. of stops1 = index of beginning stop - index of Union Square on that line

    # if index of beggining stop < index of Union Square on that stop
    #no. of stops 1  = index of Union Square on that line - index of beginning stop

      #on destination line, if index of destination stop > index of Union Square
      # on destination line then:
      #no. of stops2 = index of destination stop - index of Union Square on destination line

      #if index of destionation stop is < index of Union Square on destination
      # line then:
      #no. of stops2 = index of Union Square on destination line - index of
      #destination stop

        #total no. of stops =  no. of stops1 + no. of stops2

def total_stops_calc
# calculate total number of stops when destination stop and beginning stop
# are on different lines
total_number_of_stops = number_of_stops_1 + number_of_stops_2
puts "Your trip has #{total_number_of_stops}"
end

def different_line_trip2
# number of stops from Union Square to destination

if all_trips[:off_line].index(stop_off) > all_trips[:off_line].index("Union Square")
number_of_stops_2 = all_trips[:off_line].index(stop_off) - all_trips[:off_line].index("Union Square")
total_stops_calc()
else number_of_stops_2 = all_trips[:off_line].index("Union Square") - all_trips[:off_line].index(stop_off)
total_stops_calc()
end

def different_line_trip1
  #number of stops on first line to Union Square

if all_trips[:on_line].index(stop_on) > all_trips[:on_line].index("Union Square")
number_of_stops_1 = all_trips[:on_line].index(stop_on) - all_trips[:on_line].index("Union Square")
different_line_trip2()
elsif all_trips[:on_line].index(stop_on) < all_trips[:on_line].index("Union Square")
number_of_stops_1 = all_trips[:on_line].index("Union Square") - all_trips[:on_line].index(stop_on)
different_line_trip2()
end


def input_stops

    print "What line you are getting on at? "
    on_line = gets().chomp()
    print "What stop you are getting on at? "
    stop_on = gets().chomp()
    print "What line are you getting off at?"
    off_line = gets().chomp()
    print "What stop are you getting off at?"
    stop_off = gets().chomp()

    line_test_
  end

plan_trip(:on_line, stop_on, :off_line, stop_off) = input_stops()

binding.pry

" "

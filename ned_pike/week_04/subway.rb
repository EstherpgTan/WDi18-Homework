# note this was simply finding out how few lines could be used
def stops(stop1, line1, stop2, line2)
  station = Hash["n_line", %w[times_square 34th 28th 23rd union_square 8th], "l_line", %w[8th 6th union_square 3rd 1st], "six_line", %w[grand_central 33rd 28th 23rd union_square astor_place]]
  first = station[line1]
  second = station[line2]
  indexUnion1 = first.index("union_square")
  stopIndex1 = first.index(stop1)
  indexUnion2 = second.index("union_square")
  stopIndex2 = second.index(stop2)
  result = []
  if !first.include?(stop1) || !second.include?(stop2) || (line1 === line2 && stop1 === stop2)
    return puts "Incorrect trip"
  end
  if stopIndex1 <= indexUnion1  && stopIndex2 >= indexUnion2
    first = first.select { |n| first.index(n) <= indexUnion1 && first.index(n) >= stopIndex1}
    second = second.select { |n| second.index(n) >= indexUnion2 && second.index(n) <= stopIndex2}
  elsif stopIndex1 >= indexUnion1  && stopIndex2 <= indexUnion2
    first = first.select { |n| first.index(n) >= indexUnion1 && first.index(n) <= stopIndex1}
    first = first.reverse
    second = second.select { |n| second.index(n) <= indexUnion2 && second.index(n) >= stopIndex2}
    second = second.reverse
  elsif stopIndex1 <= indexUnion1  && stopIndex2 <= indexUnion2 && line1 != line2
    first = first.select { |n| first.index(n) <= indexUnion1 && first.index(n) >= stopIndex1}
    second = second.select { |n| second.index(n) <= indexUnion2 && second.index(n) >= stopIndex2}
    second = second.reverse
  elsif stopIndex1 >= indexUnion1  && stopIndex2 >= indexUnion2
    first = first.select { |n| first.index(n) >= indexUnion1 && first.index(n) <= stopIndex1}
    first = first.reverse
    second = second.select { |n| second.index(n) >= indexUnion2 && second.index(n) <= stopIndex2}
  else
    stopIndex1 < stopIndex2 ? (first = first.select { |n| first.index(n) <= stopIndex2 && first.index(n) >= stopIndex1}
                               second = second.select { |n| second.index(n) >= stopIndex1 && second.index(n) <= stopIndex2}):
                               (first = first.select { |n| first.index(n) >= stopIndex2 && first.index(n) <= stopIndex1}
                               second = second.select { |n| second.index(n) <= stopIndex1 && second.index(n) >= stopIndex2})
  end
  final = (result << first + second).flatten.uniq
  message = ""
  message += "You will get on at #{final[0]} "
  message += "You will ride through stops #{final.slice(1, final.length - 2)*" "} " if final.length > 2
  message += "You will get off at #{final[final.length - 1]}"
end

puts stops("times_square", "n_line", "union_square", "six_line")
puts stops("3rd", "l_line", "6th", "l_line")
puts stops("23rd", "six_line", "times_square", "n_line")
puts stops("times_square", "n_line", "28th", "n_line")

# object = Hash["n_line", "%w(Times_Square 34th 28th 23rd union_square 8th)", "l_line", "%w(8th 6th union_square 3rd 1st)", "six_line", %w(grand_central 33rd 28th 23rd union_square Astor_Place)]

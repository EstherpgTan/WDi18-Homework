# Create a method that takes a single argument.
def raindrops(num)

  # Start off with an empty string. We'll be pushing the strings "Pling", "Plang" and "Plong" to this as necessary.
  str = ""

  # We could write the tests in a way we're pretty familiar with...
  # if num % 3 == 0
  #   str += "Pling"
  # end

  # ... or we could use some one-liner Ruby syntax:
  str += "Pling" if num % 3 == 0

  # if num % 5 == 0
  #   str += "Plang"
  # end

  str += "Plang" if num % 5 == 0

  # if num % 7 == 0
  #   str += "Plong"
  # end

  str += "Plong" if num % 7 == 0

  
  # if str.length == 0
  #   return num.to_s
  # else
  #   return str
  # end

  return str unless str.length == 0
  return num.to_s
end

print raindrops(5)

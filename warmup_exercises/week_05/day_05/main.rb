require 'pry'

# Create a new class. This groups all our methods relating to nucleotides neatly, ensures the methods attached to this class will not conflict with other similarly named methods (eg 'valid?' 'counts', which are pretty generic), and embraces object oriented programming.

# We will create new instances of this class by calling the .new method on the class itself (eg Nucleotides.new).
class Nucleotides

# A class's initialize method will be called whenever the .new method is called on the class. The code in here will run whenever we instantiate a new Nucleotides object.

# We want to be able to pass in a string when instantiating a new Nucleotides object, and we want that string to be available to all methods throughout the class - so we'll create an instance variable called @string. NB: string would only be available to the initialize method. @string will be available to all methods.
  def initialize(string)
    @string = string
  end

# Using Ruby's implicit return, I'll store my counts hash in a method. So, whenever I call counts, I'll just get back a hash.
  def counts
    {
      "A" => 0,
      "G" => 0,
      "C" => 0,
      "T" => 0
    }
  end

# The ? mark isn't a magic character - it just reminds myself and other developers that this is a predicate method - a method designed to only ever return true or false.
  def valid?(letter)
    # Get the hash stored in the counts method, then get an array comprised of all the keys in that hash, and then see if that array includes whatever letter is passed into the valid? method
    counts.keys.include?(letter)
  end

  # This is the method I'll actually be calling to get back data about the validity of nucleotides passed in an instance object of the Nucleotides object.
  def counter
    # I can't modify counts directly, since it's a method. I can, however, make a copy of it. The copy (valids) is what I'll be adding nucleotide counts to.
    valids = counts
    # Start out with an empty string that I'll append message text to.
    message = ""
    # Take the string passed into the new method, upcase the letters in that string, split it into an array of its characters, and loop over each of the characters in that array (calling each one 'el' at one time)
    @string.upcase.chars.each do |el|
      # Call the valid? method, passing in the character, and - if it's valid - look up the corresponding key/value pair in the valids hash and increment its value by 1.
      if valid?(el)
        valids[el] += 1
      else
        # If it's not valid, just add the fact that it's not valid to the message.
        message += "#{el} is not a valid nucleotide.\n"
      end
    end
    # Once we've looped through all the characters in the string, go through the valids hash, and for each one, add a string (interpolating the key and value of each pair) to the message.
    valids.each do |k, v|
      message += "There are #{v} #{k}s in #{@string}\n"
    end
    # Then return the message.
    message
  end
end

# Instantiate a new instance of the Nucleotides class, passing in a string of characters (as the initialize method is expecting)
n = Nucleotides.new("GGGHTTTCA")

# Call the counter method on that new instnace of the Nucleotides class. 
puts n.counter

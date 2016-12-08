require 'pry'

# Create a class called Atbash. This encapsulates all our code relating to en/coding a string using the Atbash cipher. This is handy because we can create objects that inherit common functionality from this class, we know that all our cipher-related code will be found in this object, and we've namespaced methods like 'encode' to this class (no conflict with, for example, other ciphers' encode method):
class Atbash

  # The initialize method gets called whenever the new method is called on an object of this class.
  def initialize(word)
    # Create a bunch of instance variables that will be (1) available to all methods in this class; (2) specific to any particular instance of this class:
    @word = word.downcase
    @alphabet = ("a".."z").to_a
    # Wooo non-destructive reverse! Ruby > JS!!
    @reverse = @alphabet.reverse
  end

  def encode
    message = ""
    # These methods all achieve the same result - they take a string and iterate over the characters in that string:
    # @word.split("").each do |c|
      # message << @reverse[i]
    # end
    # @word.chars.each do |c|
      # message << @reverse[i]
    # end
    # @word.chars.each_with_index do |c,i|
    #   message << @reverse[i]
    # end
    # The append operator (<<) words on both strings and arrays - it allows us to append something to the end of the object.
    # Go through each character in the string, and - calling the current character c...
    @word.each_char do |c|
      # Get the index of that character in the @alphabet array, and ...
      i = @alphabet.index(c)
      # ... find the character with that index in the @reverse array and append it to the end of the message string
      message << @reverse[i]
    end
    # Return the message at the end. This way, the encode method will - when called - return the message.
    message
  end
end

puts "What word to you want to en/decode?"
input = gets.chomp
# Create a new instance of the Atbash class, passing in the value stored in the variable input:
word = Atbash.new(input)

require 'pry'

# I'm going to be using a few different methods to be able to get and/or set the value of an instance object of the Robot class:

# 1. attr_accessor - Any attributes I want to be able to get and/or set from OUTSIDE the class, I'll pass into the attr_accessor method.

# 2. @instance_variables - Any variables I want to be able to access from different methods in my class, I'll declare as instance variables.

class Robot
  # I'm going to use the attr_accessor method to specify all the attributes of an instance of the Robot class I want to be able to get or set from OUTSIDE the class. It probably actually would've been safer to use the attr_reader method here, since I actually don't want to be able to change any of these attributes from outside the class (the class methods will do that for me), but anyway.
  attr_accessor :name, :mac_address, :instruction_count

  # The initialize method gets called whenever a new instance of the Robot class is instantiated (ie, whenever the Robot.new method is called)

  def initialize
    # I'm going to make all the variables in my initialize method instance variables, because I'm going to want to access these from other methods.

    # I'll use the Time object's now method to get the time when a new instance of the Robot class was instantiated.
    @creation_time = Time.now
    @boot_time = Time.now

    # I'm going to need to generate a name for my robot in a few places, so instead of repeating that code a few times, I'll put the code to generate a name in a method (generate_name), and assign whatever that method returns to the @name variable.
    @name = generate_name
    @mac_address = "mac_address: #{generate_name}."

    # I'll give my robot an initial instruction count of 0. Again, this needs to be an instance variable so my other methods have access to it.
    @instruction_count = 0
    puts "Greetings. I am #{@name}."
  end

  def generate_name
    # We can create a range using (start..end) syntax. That's awesome, but it doesn't actually create an array of elements we can sample, so first we need to call the to_a method on that range. The to_a method returns a array, which we can then call the sample method on. The sample method returns another array, which we can collapse into a string using the join method.

    # I'm storing the random letters/numbers in local variables just to make my code a little more readable:
    letters = ("A".."Z").to_a.sample(2).join
    numbers = (0..9).to_a.sample(2)

    # Ruby will implicitly return the last line of a method, so I can just put a string (interpolating the values stored in the letters and numbers variables) at the end here and that'll return that string to the call site.
    "#{letters}-#{numbers}"
  end

  def reset
    # I'm incrementing the instruction count from a few different methods, so I'll DRY up my code by creating a method that increments the instruction count and calling that wherever I like.
    increment
    puts "Resetting robot #{@name}."
    @name = generate_name
    puts "Robot #{@mac_address} assigned new name: #{@name}."
    @boot_time = Time.now
  end

  def increment
    @instruction_count += 1
  end

  # I don't need to access any of the variables in my timers method from any other method in this class, so I'm not going to bother creating instance variables for them, and I don't need to access them from outside the class, so I won't add them to my attr_accessor method.
  def timers
    increment
    current_time = Time.now
    time_since_creation = current_time - @creation_time
    time_since_boot = current_time - @boot_time
    puts "#{time_since_creation} seconds since #{@name} was created; #{time_since_boot} since last boot."
  end
end

# Create a new instance of the Robot class (aka "instantiate a new Robot object")
r = Robot.new

# From here (ie, outside the class), I can access two things - any attributes passed into the attr_accessor method...
r.name
r.mac_address
r.instruction_count

# ... and any methods defined in the class:
r.timers
r.reset

binding.pry

puts 'Thank you for your services towards the imminentization of the singularity at Badger Robotics.

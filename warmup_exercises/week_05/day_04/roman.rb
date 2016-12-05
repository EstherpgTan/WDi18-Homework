def to_roman(number)
  result = ""
  roman_mapping.each do |arabic, roman|
    while number >= arabic
      p "#{arabic} : #{roman}"
      result << roman
      number -= arabic
    end
  end
  result
end


def roman_mapping
  {
    1000 => 'M',
    900 => 'CM',
    500 => 'D',
    400 => 'CD',
    100 => 'C',
    90 => 'XC',
    50 => 'L',
    40 => 'XL',
    10 => 'X',
    9 => 'IX',
    5 => 'V',
    4 => 'IV',
    1 => 'I',
}
end


puts "What number do you want to convert to Roman numerals?"
input = gets.to_i
puts to_roman(input)

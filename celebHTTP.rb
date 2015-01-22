require 'httparty'

puts "New player"
puts "Enter ip"

address = gets.chomp

url = address + "/"
response = HTTParty.get(url)

correct = false

while (!correct) do
    puts response
    puts "Make a guess"
    guess = gets.chomp
    guess_url = url + guess
    guess_url = guess_url.gsub(" ", "%20")
    puts guess_url
    answer = HTTParty.get(guess_url)
    if answer.keys[0] == "correct"

      puts "You're right"
      correct = true

    else

      puts "Wrong? Guess again?"

      correct = false
    end

  end

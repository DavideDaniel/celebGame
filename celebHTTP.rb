require 'httparty'
require 'json'

puts "New player"

ip_address = gets.chomp

url = ip_address + "/"
response = JSON.parse(HTTParty.get(url))

wrong = false



while (!wrong) do
    guess = gets.chomp
    guess_url = ip_address + "/" + guess
    answer = JSON.parse(HTTParty.get(url))
    if answer["results"]["keys"][""]

      wrong = false

    else


      wrong = true
    end

  end

rot = int(raw_input('What is your rotation? '))
alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
rotated_alphabet = alphabet[rot:] + alphabet[:rot]
cipher = dict(zip(rotated_alphabet, alphabet))
user_in = raw_input("What do you want ciphered? ").lower()
user_out = ''
for letter in user_in:
  if letter in cipher:     
    user_out += cipher[letter]
  elif letter == ' ':
    user_out += ' '      
print user_out




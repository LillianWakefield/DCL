user_input = raw_input("What is your phrase? ")
user_output = {}
split_list = user_input.split()
for word in split_list: 
  user_output[word]=user_input.count(word)
print user_output
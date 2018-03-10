user_input = raw_input("What is your word? ")
user_output = {}
for i in user_input: 
  user_output[i]=user_input.count(i)
print user_output
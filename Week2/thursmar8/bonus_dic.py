user_input = raw_input("What is your word? ")
user_output = {}
for i in user_input: 
  user_output[i]=user_input.count(i)

import operator
sorted_output = sorted(user_output.items(), key = operator.itemgetter(1), reverse = True)
print sorted_output[:3]


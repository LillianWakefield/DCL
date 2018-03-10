import sys
total = int(raw_input("Bill total? "))
service = raw_input("Quality of service? ")
if service == "Good":
  percent = .20
elif service == "fair":
  percent = .15
elif service == "bad":
  percent = .10
else :
  print "Sorry, that's not a type of service I understand."
  sys.exit()

new_total = total * percent + total
print new_total
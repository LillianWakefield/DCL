h = int(raw_input("Triangle height? "))
mylist = "*"
b = (h * 2) - 1
for n in range(1, b + 1, 2):
    print " " * ((b - n)/2) + mylist * n + " "
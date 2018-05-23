def triangle():
    h = int(raw_input("Triangle height? "))
    mylist = "*"
    b = (h * 2) - 1
    for n in range(1, b + 1, 2):
      print " " * ((b - n)/2) + mylist * n + " "
      

def square():
  n = int(raw_input("How big do you want your square? "))
  ilovestars = "*"
  for i in range(n):
    print ilovestars * n
    
def box():
  h = int(raw_input('Height? '))
  w = int(raw_input('Width? '))
  top_bottom = "*" * w
  inbetween = "*" + " " * (w - 2) + "*"
  print top_bottom
  for n in range(h - 2):
    print inbetween
  print top_bottom
 

def paint():
    shape = int(raw_input("""What shape do you want me to draw?
    1. triangle
    2. square
    3. box
    """))
    if shape == 1:
        triangle()
        print "Ok bye!"
        quit()
    if shape == 2:
        square()
        print "Ok bye!"
        quit()
    if shape == 3:
        box()
        print "Ok bye!"
        quit()
    else:
        print("Not an option, enter 1, 2, or 3")
        paint()
    
print paint()
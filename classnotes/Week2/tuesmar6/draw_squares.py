from turtle import *
def drawsquare(100:
  for i in range(4):
    forward(100)
    left(90)
coord_list = [(-100, -100, 100), (100, 100, 200), (-100, 100, 120), (100, -100, 250)]

for coord in coord_list:
    up()
    home()
    x, y, size = coord
    setheading(270)
    forward(x)
    setheading(0)
    forward(y)
    down()
    drawsquare(size)
mainloop()

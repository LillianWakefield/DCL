from turtle import *
def drawsquare(size):
  for i in range(4):
    forward(size)
    left(90)

if __name__ == '__main':
    drawsquare()

drawsquare(120)

up()
forward(200)
down()

drawsquare(120)

mainloop()
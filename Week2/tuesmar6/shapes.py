from turtle import *
def pentagon(x, bo, size):
  for i in range(5):
    forward(size)
    left(72)
   
def octagon(size):
  for i in range(8):
    forward(size)
    left(45)
def hexagon(size):
  for i in range(6):
    forward(size)
    left(60)

def star2(size):
  for i in range(5):
    forward(size)
    right(144)

def star(size):
  for i in range(6):
    left(60)
    forward(100)
    left(240)
    forward(size)

def drawsquare(size):
  for i in range(4):
    forward(size)
    left(90)

def triangle(size):
  for i in range(3):
    forward(size)
    left(120)

def star2(size):
  for i in range(5):
    forward(size)
    right(144)

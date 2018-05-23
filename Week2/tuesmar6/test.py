from turtle import *
from shapes import *
def pretty(x, bo, shape):
  color(x)
  if bo:
    begin_fill()
  shape()
  if bo:
    end_fill()
  mainloop()
pretty('red', True, pentagon(100))
mainloop()
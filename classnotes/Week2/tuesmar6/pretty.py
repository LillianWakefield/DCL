from turtle import *
from shapes import *
def pretty(c, bo,):
  color(c)
  if bo:
    begin_fill()
  
  triangle(200)
 
  if bo:
    end_fill()

pretty('red', True) 
#shape(size)
mainloop()
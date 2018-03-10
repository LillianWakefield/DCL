from turtle import *
def pentagon(x, bo, size):
  color(x)
  if bo:
    begin_fill()
  for i in range(5):
    forward(100)
    left(72)
  if bo:
    end_fill()
  mainloop()
pentagon('red', 1, 100)

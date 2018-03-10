w = int(raw_input('Width? '))
h = int(raw_input('Height? '))
top_bottom = "*" * w
inbetween = "*" + " " * (w - 2) + "*"

print top_bottom
for n in range(h -2):
  if row == 0 or row == height + 1:
      print "*" * w
  else:
      print "*" + " " * (w - 2) + "*"
def banner():
  text = raw_input("What do you want to say with a fancy banner? ")
  n = len(text)
  print "*" * n
  print text
  print "*" * n
print banner()

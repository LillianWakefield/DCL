phonebook = {
    'Alice': '703-493-1834',
    'Bob': '857-384-1234',
    'Elizabeth': '484-584-2923'}

def main_menu():
  start = int(raw_input("""Electronic Phone Book
=====================
1. Look up an entry
2. Set an entry
3. Delete an entry
4. List all entries
5. Quit
What do you want to do (1-5)? """))
  if start == 1:
    look_up = raw_input("Who are you looking for? ")
    x = phonebook.get(look_up)
    print look_up + ': ' + x
    main_menu()
  if start == 2:
    name = raw_input("Name? ")
    number = raw_input("Number? ")
    phonebook[name] = number
    main_menu()
  if start == 3:
    delete = raw_input("Who do you want to delete? ")
    del phonebook[delete]
    main_menu()
  if start == 4:
    for i in phonebook:
      print i, phonebook[i]
    main_menu()
      
  if start == 5:
    quit()
main_menu()
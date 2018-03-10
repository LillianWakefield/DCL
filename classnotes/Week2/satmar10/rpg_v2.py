class Character(object):
    def alive(self):
        if self.health > 0:
            return True
        else:
            return False
class Hero(Character):
    def __init__(self):
        self.health = 10
        self.power = 5
    def attack(self, enemy):
      enemy.health -= self.power
      print "You do %d damage to the goblin." % self.power
      if enemy.health <= 0:
        print "The goblin is dead."
  
    def print_status(self):
              print "You have %d health and %d power." % (self.health, self.power)


class Goblin(Character):
    def __init__(self):
        self.health = 6
        self.power = 2
    def attack(self, enemy):
       if self.health > 0:
            # Goblin attacks hero
            enemy.health -= self.power
            print "The goblin does %d damage to you." % self.power
            if self.health <= 0:
                print "You are dead."
 

    def print_status(self):   
      print "The goblin has %d health and %d power." % (self.health, self.power)

def main():
    barry = Hero()
    gobby = Goblin()
    while gobby.alive() and barry.alive():
        barry.print_status()
        gobby.print_status()
        print
        print "What do you want to do?"
        print "1. fight goblin"
        print "2. do nothing"
        print "3. flee"
        print "> ",
        input = raw_input()
    
        if input == "1":
          barry.attack(gobby)
          gobby.attack(barry)
        elif input == "2":
            pass3
        elif input == "3":
            print "Goodbye."
            break
        else:
            print "Invalid input %r" % input

       


main()


    

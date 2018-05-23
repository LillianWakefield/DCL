class Character(object):
    def alive(self):
        if self.health > 0:
            return True
        else:
            return False

    def attack(self, enemy):
        # Hero attacks goblin
        enemy.health -= self.power
        print "%s does %d damage to the %s." % (self.name, self.power, enemy.name)
        if enemy.health <= 0:
            print "The goblin is dead."

    def print_status(self):
        print "%s has %d health and %d power." % (self.name, self.health, self.power)

class Hero(Character):
    def __init__(self):
        self.name = "Hero"
        self.health = 10
        self.power = 5

class Goblin(Character):
    def __init__(self, name):
        self.name = name 
        self.health = 6
        self.power = 2


def main():
    barry = Hero()
    goblin = Goblin("Goblin")

    while goblin.alive() and barry.alive():
        barry.print_status()
        goblin.print_status()
        print
        print "What do you want to do?"
        print "1. fight goblin"
        print "2. do nothing"
        print "3. flee"
        print "> ",
        input = raw_input()
        if input == "1":
            barry.attack(goblin)
        elif input == "2":
            pass
        elif input == "3":
            print "Goodbye."
            break
        else:
            print "Invalid input %r" % input

        if goblin.alive():
            goblin.attack(barry)


main()
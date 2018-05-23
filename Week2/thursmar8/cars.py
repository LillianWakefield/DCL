class Vehicle(object):
    def __init__(self, make, model, year):
      self.make = make
      self.model = model
      self.year = year
    
    def print_info(self):
        print self.make
        print self.model
        print self.year

car = Vehicle('Nissan', 'Leaf', 2015)
car.print_info()

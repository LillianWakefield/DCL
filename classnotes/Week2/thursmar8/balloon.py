class Balloon(object):
    def __init__(self, color, size, shape):
        self.color = color
        self. size = size
        self.shape = shape
        self.inflated = False
    
    def inflate(self):
        self.inflated = True
    def explode(self):
        self.inflate = False
        print "Bang!"


class BigBalloon(Balloon):
     def __init__(self, color, size, shape):
         super(Balloon, self)__int__(color, 'Big', shaape)
        self.color = color

big_balloon = Balloon('red', 'big', 'round')
balloon2 = Balloon ('blue', 'small', 'square')
balloon = BigBalloon('green, 'round)


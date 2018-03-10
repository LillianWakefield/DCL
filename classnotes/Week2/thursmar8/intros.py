class Person(object):
    def __init__(self, name, email, phone):
        self.name = name
        self.email = email
        self.phone = phone
        self.friends = []
        self.greeting_count = 0
        self.greeted = []
        self. unique_num_greeted = 0
   
    def __repr__(self):
        return '' % (self.name, self.email, self.phone)


    def greet(self, other_person):
        print 'Hello %s, I am %s!' % (other_person.name, self.name)
        self.greeting_count += 1
        if other_person.name not in self.greeted:
          self.greeted.append(other_person.name)
          self.unique_num_greeted += 1
    
    def contact_info(self):
        print '%s\'s email: %s, %s\'s phone number: %s' % (self.name, self.email, self.name, self.phone)

    def add_friend(self, friend):
        self.friends.append(friend.name)

    def friend_count(self):
      return len(self.friends)

Sonny = Person('Sonny', 'sonny@hotmail.com', '483-485-4948')
Jordan = Person('Jordan', 'jordan@aol.com', '495-586-3456')
Sonny.greet(Jordan)
Jordan.greet(Sonny)
Sonny.contact_info()
Jordan.contact_info()
        
Jordan.add_friend(Sonny)
Sonny.add_friend(Jordan)
print Sonny.friends
print Jordan.friends
print Sonny.friend_count()
print Jordan.greeting_count
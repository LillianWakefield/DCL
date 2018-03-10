
normal_alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
caesar_alpha = normal_alpha
caesar_alpha.insert(0, 'z')
caesar_alpha.pop()
letters = dict(zip((normal_alpha, caesar_alpha))

a = 4
print a
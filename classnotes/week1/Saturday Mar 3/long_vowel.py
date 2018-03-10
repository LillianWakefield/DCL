long_vowels = ('aa', 'ee', 'ii', 'oo', 'uu')
userinput = raw_input("Word? ")
userinput = userinput.replace('aa', 'aaaaa')
userinput = userinput.replace('ee', 'eeeee')
userinput = userinput.replace('ii', 'iiiii')
userinput = userinput.replace('oo', 'ooooop')
userinput = userinput.replace('uu', 'uuuuu')
print userinput
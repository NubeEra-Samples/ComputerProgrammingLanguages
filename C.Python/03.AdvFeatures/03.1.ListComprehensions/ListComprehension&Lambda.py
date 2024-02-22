############################
#using Loop
############################
h_letters = []
for letter in 'abcdef':
    h_letters.append(letter)

print(h_letters)


############################
#Using List Comprehension
############################
h_letters = [ letter for letter in 'abcdef' ]
print( h_letters)

number_list = [ x for x in range(20) if x % 2 == 0]
print(number_list)


############################
#Using List Map Lambda
############################
letters = list(map(lambda x: x+1, range(5,51,5)))
print(letters)


my_lambda = lambda x,y,z : x - 100 + y - z
my_lambda(100, 100, 100) # returns 0




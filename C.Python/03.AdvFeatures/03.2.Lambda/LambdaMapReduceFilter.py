############################
#Reduce
############################
reduce(lambda x,y: x+y, [47,11,42,13])

############################
#Filter
############################
def f(x): 
	return x % 3 == 0 or x % 5 == 0
	
filter(f, range(2, 25))


############################
#Using List Map Lambda
############################
letters = list(map(lambda x: x+1, range(5,51,5)))
print(letters)


my_lambda = lambda x,y,z : x - 100 + y - z
my_lambda(100, 100, 100) # returns 0




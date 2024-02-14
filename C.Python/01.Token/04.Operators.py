# a = 5
# b = 2
# print(a > b)   # a is Greater then b  ---> True

# print(a < b)   # a is Less then b  ---> False
################################################
a = 5   # Assignment Operator
b = 2

# equal to operator
# print('a == b =', a == b)  # False

# # not equal to operator
# print('a != b =', a != b)  # True

# greater than operator
# print('a > b =', a > b)   # a is greater then b  --> True

# # less than operator
# print('a < b =', a < b)   #a is Less then b  --> False 

# # greater than or equal to operator
# print('a >= b =', a >= b)   # True

# # less than or equal to operator
# print('a <= b =', a <= b)  # False

####################Logical Operator############################
#  condition1  LO   condition2
#  condition1  and  condition2  
#       if all conditions true then output is true 
#       if any conditions false then output always false 
# a = 5
# b = 6
# print((a > 2) and (b >= 6))    # True

# print(True and False)
# print(True and True)
# print(False and True)

#  condition1  or  condition2  
#       if any conditions true then output is true 
#       if all conditions false then output always false
# print(False or False) 

# print( not False )

######################################
# x1 = 5
# y1 = 5
# x2 = 'Hello'
# y2 = 'Hello'
# x3 = [1,2,3]
# y3 = [1,2,3]

# print(x1 is not y1)  # prints False

# print(x2 is y2)  # prints True

# print(x3 is y3)  # prints False


#############################################
x = 'Hello world'
y = {1:'a', 2:'b'}

# check if 'H' is present in x string
print('H' in x)  # prints True

# check if 'hello' is present in x string
print('hello' not in x)  # prints True

# check if '1' key is present in y
print(1 in y)  # prints True

# check if 'a' key is present in y
print('a' in y)  # prints False

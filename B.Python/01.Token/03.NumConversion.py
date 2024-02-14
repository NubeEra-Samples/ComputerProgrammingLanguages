# integer_number = 123
# float_number = 1.23

# #Auto(Implicit) Conversion
# new_number = integer_number + float_number

# # display new value and resulting data type
# print("Value:",new_number)
# print("Data Type:",type(new_number))

#################################################################
num_string = '12'
num_integer = 23

print("Data type of num_string before Type Casting:",type(num_string))

# Manual (explicit) type conversion
num_string = int(num_string)

print("Data type of num_string after Type Casting:",type(num_string))

num_sum = num_integer + num_string

print("Sum:",num_sum)
print("Data type of num_sum:",type(num_sum))


# Key Points to Remember
# ######################
# 1.Type Conversion is the conversion of an object from one data type to another data type.
# 2.Implicit Type Conversion is automatically performed by the Python interpreter.
# 3.Python avoids the loss of data in Implicit Type Conversion.
# 4.Explicit Type Conversion is also called Type Casting, the data types of objects are converted using predefined functions by the user.
# 5.In Type Casting, loss of data may occur as we enforce the object to a specific data type.
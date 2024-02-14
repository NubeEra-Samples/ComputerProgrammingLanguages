# Use of break statement inside loop

for val in "string":
	if val == "i":
		print('Break statement executing')
		break
	print(val)
print("-------------")
for val in "string":
	if val == "i":
		print('pass executed')
		continue
	print(val)
print("-------------")
for val in 'string':
	if(val == 'i'):
		print('pass executed')
		pass
	print(val)
print("-------------")
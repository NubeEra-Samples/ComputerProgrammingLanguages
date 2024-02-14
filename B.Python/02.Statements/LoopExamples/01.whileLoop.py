fruits = ["banana", "apple", "orange", "kiwi"]
position = 0
while position < len(fruits):
    print(fruits[position])
    position = position + 1
print("reached end of list")
##################################################################################
fruits = ["banana", "apple", "orange", "kiwi"]
position = 0
while True:
    if position >= len(fruits):
        break
    print(fruits[position])
    position = position + 1
print("reached end of list")
checkgrade = int(input("Enter the score: "))

if(checkgrade > 100):
    print("ERROR: Invalid score")
elif(checkgrade < 0):
    print("ERROR: Invalid score")
elif(checkgrade >= 80 and checkgrade <= 100):
    print("Your grade is A")
elif(checkgrade >= 70 and checkgrade <= 79):
    print("Your grade is B")
elif(checkgrade >= 60 and checkgrade <= 69):
    print("Your grade is C")
elif(checkgrade >= 50 and checkgrade <= 59):
    print("Your grade is D")  
elif(checkgrade >= 0 and checkgrade <= 49):
    print("Your grade is F")
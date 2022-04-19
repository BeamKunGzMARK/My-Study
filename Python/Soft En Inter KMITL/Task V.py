import turtle

window = turtle.Screen()
t = turtle.Turtle() 

shape = input("Enter the shape(triangle, square, pentagon : ")
color = input("Enter the color(red, blue, green, etc. : ")
size = int(input("Enter the size : "))
# องศา
t.showturtle()

if(shape == "triangle"):
    t.pencolor(color)
    t.forward(size)
    t.left(120)
    t.forward(size)
    t.left(120)
    t.forward(size)
elif(shape == "square"):
    t.pencolor(color)
    for i in range(4):
        t.forward(size)
        t.left(90)
elif(shape == "pentagon"):
    t.pencolor(color)
    for i in range(5):
        t.forward(size)
        t.left(72)



window.exitonclick()
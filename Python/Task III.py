import turtle

window = turtle.Screen()
t = turtle.Turtle() 

size = int(input("Enter the size:"))


# องศา
t.showturtle()

#? House
t.forward(size)
t.right(90)
t.forward(size)
t.right(90)
t.forward(size)
t.right(90)
t.forward(size)
t.setheading(360)
t.forward(size)
t.left(120)
t.forward(size)
t.left(120)
t.forward(size)
t.left(120)


window.exitonclick()
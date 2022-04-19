import turtle
import random



window = turtle.Screen()
t = turtle.Turtle() 


# องศา
t.showturtle()

for i in range(100):
    t.forward(random.randint(10, 50))
    t.setheading(random.randint(1, 360))
window.exitonclick()
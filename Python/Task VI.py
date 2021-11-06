import turtle

window = turtle.Screen()
t = turtle.Turtle() 

shape = int(input("อยากได้กี่เหลียมว่ามา : "))
# องศา
t.showturtle()

for i in range(shape):
    t.forward(100)
    t.left(360/shape)

window.exitonclick()
import turtle

window = turtle.Screen()
t = turtle.Turtle() 

# องศา
t.showturtle()

#? Triangle
for i in range(3):
    t.forward(60)
    t.left(120)
t.up()
t.goto(180,180)
t.down()

#? Pentagon
for i in range(5):
    t.forward(80)
    t.left(72)

t.up()
t.goto(-180,180)
t.down()

#? Octagon
for i in range(8):
    t.forward(50)
    t.left(45)

window.exitonclick()
import turtle

window = turtle.Screen()
t = turtle.Turtle() 

howmany = int(input("อยากได้กี่เหลียมว่ามา : "))
whatyourcolor = input("Enter the color(red, blue, green, etc. : ")
# องศา
t.showturtle()

def polygon(n, color):
    t.pencolor(color)
    for i in range(n):
        t.forward(50)
        t.left(360/n)

polygon(howmany, whatyourcolor)


window.exitonclick()

import turtle as t

def tree(leaf):
    t.forward(100)
    leaves(leaf)

def leaves(n,size = 100):
    if n == 0:
        return

    t.left(30)
    t.forward(size/1.5)
    leaves(n-1,size/1.5)
    t.backward(size/1.5)
    t.right(60)
    t.forward(size/1.5)
    leaves(n-1,size/1.5)
    t.backward(size/1.5)
    t.left(30)

t.left(90)
tree(8)
class Circle:
    def draw(self):
        print("Circle")


class Square:
    def draw(self):
        print("Square")


class Triangle:
    def draw(self):
        print("Triangle")


class ShapeFactory:
    @staticmethod
    def create(kind):
        if kind == "circle":
            return Circle()
        elif kind == "square":
            return Square()
        elif kind == "triangle":
            return Triangle()
        else:
            raise ValueError("Invalid shape")


shape = ShapeFactory.create("circle")
shape.draw()
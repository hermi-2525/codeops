class Shape:
    def area(self):
        pass


class Circle(Shape):
    def area(self):
        print("Area of Circle")


class Square(Shape):
    def area(self):
        print("Area of Square")


class Triangle(Shape):
    def area(self):
        print("Area of Triangle")


shapes = [Circle(), Square(), Triangle()]

for shape in shapes:
    shape.area()
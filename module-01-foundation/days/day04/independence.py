class Product:
    def __init__(self, name, price, quantity):
        self.name = name
        self.price = price
        self.__quantity = quantity

    @property
    def quantity(self):
        return self.__quantity

    def restock(self, n):
        self.__quantity += n

    def sell(self, n):
        if n > self.__quantity:
            print("Not enough stock.")
        else:
            self.__quantity -= n

product1 = Product("Phone", 18000, 10)
product2 = Product("Laptop", 50000, 8)
product3 = Product("Mouse", 500, 20)

product1.sell(5)

print("Phone:", product1.quantity)
print("Laptop:", product2.quantity)
print("Mouse:", product3.quantity)
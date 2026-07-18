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

product1 = Product("Phone", 18000, 5)

product1.sell(7)

print(product1.quantity)
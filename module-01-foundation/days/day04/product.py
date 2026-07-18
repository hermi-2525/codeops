
class product:
    def __init__(self, name, price, quantity):
        self.name = name
        self.price = price
        self.quantity = quantity

    def restock(self, n):
        self.quantity += n

    def sell(self, n):
        self.quantity -= n

product1 = poduct("Laptop", 1000, 10)
product1.restock(5)
product1.sell(3)




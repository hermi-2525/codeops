prices = {
    "Bread": 50,
    "Milk": 80,
    "Eggs": 120,
    "Sugar": 90,
    "Rice": 150
}

print("Price Report")

for item, price in prices.items():
    print(f"{item}: {price} ETB")
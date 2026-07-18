stock = {}

try:
    with open("stock.txt", "r") as file:
        for line in file:
            item, quantity = line.strip().split(",")
            stock[item] = int(quantity)

except FileNotFoundError:
    print("No stock file found. Starting with an empty inventory.")

def adjust_stock(item, amount):
    stock[item] = stock.get(item, 0) + amount

adjust_stock("Ibuprofen", 5)
adjust_stock("Bandage", -2)
adjust_stock("Gloves", 12)

print("\nCurrent Inventory")

for item, quantity in stock.items():
    print(f"{item}: {quantity}")

print("\nLow Stock Items")

for item, quantity in stock.items():
    if quantity < 10:
        print(item)

with open("stock.txt", "w") as file:
    for item, quantity in stock.items():
        file.write(f"{item},{quantity}\n")

print("\nInventory saved successfully.")
# 1. Unique Cities

cities = [
    "Addis Ababa",
    "Adama",
    "Hawassa",
    "Bahir Dar",
    "Adama",
    "Addis Ababa",
    "Hawassa"
]

unique_cities = set(cities)

print("Distinct Cities:")
for city in unique_cities:
    print(city)

print("Count:", len(unique_cities))


# 2. Price Report

prices = {
    "Bread": 50,
    "Milk": 80,
    "Eggs": 120,
    "Sugar": 95,
    "Rice": 180
}

print("\nPrice Report:")
for item, price in prices.items():
    print(item, "-", price, "ETB")


# 3. Tax Comprehension

prices = [100, 250, 400, 80]

tax_prices = [price * 1.15 for price in prices]

print("\nPrices with Tax:")
print(tax_prices)


# 4. Cheap Items

cheap_items = [price for price in prices if price < 200]

print("\nCheap Items:")
print(cheap_items)


# 5. Write & Read

with open("names.txt", "w") as file:
    file.write("Almaz\n")
    file.write("Dawit\n")
    file.write("Samuel\n")

print("\nCustomer Names:")

with open("names.txt", "r") as file:
    for line in file:
        print(line.strip())


# 6. Safe Division

try:
    number = int(input("\nEnter a number: "))
    result = 1000 / number
except ValueError:
    print("Please enter a valid number.")
except ZeroDivisionError:
    print("Number cannot be zero.")
else:
    print("Result:", result)
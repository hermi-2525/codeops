cities = [
    "Addis Ababa",
    "Adama",
    "Hawassa",
    "Addis Ababa",
    "Bahir Dar",
    "Adama",
    "Mekelle"
]

unique_cities = set(cities)

print("Unique Cities:")
for city in unique_cities:
    print(city)

print("Total Unique Cities:", len(unique_cities))
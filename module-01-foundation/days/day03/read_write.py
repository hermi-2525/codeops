with open("names.txt", "w") as file:
    file.write("Almaz\n")
    file.write("Dawit\n")
    file.write("Tigist\n")

print("Customer Names")

with open("names.txt", "r") as file:
    for line in file:
        print(line.strip())
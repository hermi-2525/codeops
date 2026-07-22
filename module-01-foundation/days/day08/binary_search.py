def binary_search(items, target):
    low = 0
    high = len(items) - 1

    while low <= high:
        middle = (low + high) // 2

        if items[middle] == target:
            return middle

        elif items[middle] < target:
            low = middle + 1

        else:
            high = middle - 1

    return -1


balances = [100, 200, 300, 400, 500, 600, 700]

print("Balances:", balances)

print("Search for 500")
print(binary_search(balances, 500))

print("Search for 250")
print(binary_search(balances, 250))
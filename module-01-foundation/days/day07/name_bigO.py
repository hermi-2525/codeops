# 1. List Index - O(1)
numbers = [10, 20, 30, 40, 50]
print(numbers[3])

# O(1)
# Accessing an element by index takes constant time.


# 2. Single Loop - O(n)
for num in numbers:
    print(num)

# O(n)
# Every element is visited once.


# 3. Nested Loop - O(n^2)
for i in numbers:
    for j in numbers:
        print(i, j)

# O(n^2)
# Every element is compared with every other element.


# 4. Dictionary Lookup - O(1)
accounts = {
    "A001": "John",
    "A002": "Mary",
    "A003": "Tom"
}

print(accounts["A002"])

# O(1)
# Dictionary lookup uses hashing.


# 5. Binary Search - O(log n)
def binary_search(arr, target):
    left = 0
    right = len(arr) - 1

    while left <= right:
        middle = (left + right) // 2

        if arr[middle] == target:
            return middle
        elif arr[middle] < target:
            left = middle + 1
        else:
            right = middle - 1

    return -1

numbers = [1,2,3,4,5,6,7,8,9,10]
print(binary_search(numbers,7))

# O(log n)
# Half of the remaining elements are discarded each iteration.
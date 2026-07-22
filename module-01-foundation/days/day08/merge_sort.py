import random


def merge(left, right):
    merged = []

    i = 0
    j = 0

    while i < len(left) and j < len(right):

        if left[i] < right[j]:
            merged.append(left[i])
            i += 1

        else:
            merged.append(right[j])
            j += 1

    merged.extend(left[i:])
    merged.extend(right[j:])

    return merged


def merge_sort(items):

    if len(items) <= 1:
        return items

    middle = len(items) // 2

    left = merge_sort(items[:middle])
    right = merge_sort(items[middle:])

    return merge(left, right)


numbers = random.sample(range(1, 100), 10)

print("Original List")
print(numbers)

print("\nMerge Sort")
print(merge_sort(numbers))

print("\nPython sorted()")
print(sorted(numbers))
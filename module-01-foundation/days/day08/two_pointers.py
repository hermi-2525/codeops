def has_pair(nums, target):
    left = 0
    right = len(nums) - 1

    while left < right:
        current = nums[left] + nums[right]

        if current == target:
            return True

        elif current < target:
            left += 1

        else:
            right -= 1

    return False


numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

print("Numbers:", numbers)

print("\nTarget = 10")
print(has_pair(numbers, 10))

print("\nTarget = 20")
print(has_pair(numbers, 20))
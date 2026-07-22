def total(nums):
    if len(nums) == 0:
        return 0
    return nums[0] + total(nums[1:])


def count_down(n):
    if n <= 0:
        return

    print(n)
    count_down(n - 1)


numbers = [100, 250, 400]

print("Recursive Sum:", total(numbers))

print("\nCountdown:")
count_down(5)
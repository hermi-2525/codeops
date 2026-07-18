try:
    number = int(input("Enter a number: "))

    result = 1000 / number

except ValueError:
    print("Please enter a valid number.")

except ZeroDivisionError:
    print("Cannot divide by zero.")

else:
    print("Result =", result)

finally:
    print("Program Finished")
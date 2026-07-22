class Account:

    def __init__(self, account_number, owner, balance=0):
        self.account_number = account_number
        self.owner = owner
        self.balance = balance
        self.history = []

    def deposit(self, amount):
        self.balance += amount
        self.history.append(amount)

    def withdraw(self, amount):

        if amount <= self.balance:
            self.balance -= amount
            self.history.append(-amount)

        else:
            print("Insufficient balance.")

    def __str__(self):
        return f"{self.account_number} | {self.owner} | Balance: {self.balance}"


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


class AccountRegistry:

    def __init__(self):
        self.by_number = {}
        self.order = []

    def add(self, account):
        self.by_number[account.account_number] = account
        self.order.append(account.account_number)

    def list_all(self):

        for number in self.order:
            print(self.by_number[number])

    def top_by_balance(self, n=5):

        accounts = sorted(
            self.by_number.values(),
            key=lambda account: account.balance,
            reverse=True
        )

        return accounts[:n]

    def find_by_number(self, number):

        numbers = sorted(self.by_number.keys())

        index = binary_search(numbers, number)

        if index == -1:
            return None

        return self.by_number[numbers[index]]

    def recursive_sum(self, history):

        if len(history) == 0:
            return 0

        return history[0] + self.recursive_sum(history[1:])

    def total_transactions(self, number):

        account = self.find_by_number(number)

        if account is None:
            return None

        return self.recursive_sum(account.history)


registry = AccountRegistry()

a1 = Account("ACC001", "John", 500)
a2 = Account("ACC002", "Mary", 1500)
a3 = Account("ACC003", "Tom", 900)
a4 = Account("ACC004", "Sara", 2500)

registry.add(a1)
registry.add(a2)
registry.add(a3)
registry.add(a4)

a1.deposit(200)
a1.withdraw(50)
a1.deposit(100)

a2.deposit(500)
a2.withdraw(300)

print("All Accounts")
registry.list_all()

print("\nTop 3 Accounts")
for account in registry.top_by_balance(3):
    print(account)

print("\nSearch Account")
print(registry.find_by_number("ACC003"))

print("\nRecursive Transaction Total")
print(registry.total_transactions("ACC001"))
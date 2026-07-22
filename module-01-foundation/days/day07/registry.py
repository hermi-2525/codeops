class Account:
    def __init__(self, account_number, owner, balance=0):
        self.account_number = account_number
        self.owner = owner
        self.balance = balance
        self.history = []

    def deposit(self, amount):
        if amount <= 0:
            print("Deposit amount must be positive.")
            return

        self.balance += amount
        self.history.append(("deposit", amount))

    def withdraw(self, amount):
        if amount <= 0:
            print("Withdrawal amount must be positive.")
            return

        if amount > self.balance:
            print("Insufficient balance.")
            return

        self.balance -= amount
        self.history.append(("withdraw", amount))

    def undo_last(self):
        if not self.history:
            print("No transactions to undo.")
            return

        transaction = self.history.pop()

        if transaction[0] == "deposit":
            self.balance -= transaction[1]
            print(f"Undid deposit of {transaction[1]}")

        elif transaction[0] == "withdraw":
            self.balance += transaction[1]
            print(f"Undid withdrawal of {transaction[1]}")

    def __str__(self):
        return (
            f"Account Number: {self.account_number}, "
            f"Owner: {self.owner}, "
            f"Balance: {self.balance}"
        )


class AccountRegistry:
    def __init__(self):
        self.by_number = {}
        self.order = []

    def add(self, account):
        if account.account_number in self.by_number:
            print("Account already exists.")
            return

        self.by_number[account.account_number] = account
        self.order.append(account.account_number)

    def find(self, number):
        return self.by_number.get(number)

    def list_all(self):
        for number in self.order:
            print(self.by_number[number])


registry = AccountRegistry()

acc1 = Account("ACC001", "John", 1000)
acc2 = Account("ACC002", "Mary", 2000)
acc3 = Account("ACC003", "Tom", 1500)

registry.add(acc1)
registry.add(acc2)
registry.add(acc3)

print("All Accounts")
registry.list_all()

print("\nFinding ACC002")
account = registry.find("ACC002")
print(account)

print("\nTransactions")
account.deposit(500)
account.withdraw(300)
print(account)

print("\nUndo Last Transaction")
account.undo_last()
print(account)

print("\nUndo Again")
account.undo_last()
print(account)
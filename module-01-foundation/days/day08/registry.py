# Day 8 Larger Project

class BankConfig:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
            cls._instance.interest_rate = 0.05
            cls._instance.overdraft_limit = 1000
        return cls._instance


config = BankConfig()

class SMSAlert:
    def update(self, message):
        print(f"[SMS] {message}")


class AuditLog:
    def update(self, message):
        print(f"[Audit] {message}")

class Account:

    def __init__(self, owner, account_number, balance=0):

        self.owner = owner
        self.account_number = account_number

        self.__balance = balance

        self.history = []      # Stack
        self._observers = []

    @property
    def balance(self):
        return self.__balance

    def _set_balance(self, amount):
        self.__balance = amount

    # Observer

    def subscribe(self, observer):
        self._observers.append(observer)

    def _notify(self, message):

        for observer in self._observers:
            observer.update(message)

    # Deposit

    def deposit(self, amount):

        if amount <= 0:
            raise ValueError("Deposit must be positive.")

        self._set_balance(self.balance + amount)

        self.history.append(("deposit", amount))

        self._notify(f"{self.owner} deposited {amount} ETB")

    # Withdraw

    def withdraw(self, amount):

        if amount <= 0:
            raise ValueError("Withdrawal must be positive.")

        if amount > self.balance:
            raise ValueError("Insufficient balance.")

        self._set_balance(self.balance - amount)

        self.history.append(("withdraw", amount))

        self._notify(f"{self.owner} withdrew {amount} ETB")

    # Undo

    def undo_last(self):

        if not self.history:
            print("No transactions to undo.")
            return

        action, amount = self.history.pop()

        if action == "deposit":
            self._set_balance(self.balance - amount)

        elif action == "withdraw":
            self._set_balance(self.balance + amount)

        print(f"Undo: {action} {amount} ETB")

    def statement(self):

        print("\n===== Account =====")
        print("Owner:", self.owner)
        print("Account:", self.account_number)
        print("Balance:", self.balance)


class SavingsAccount(Account):

    def __init__(self, owner, account_number, balance=0):

        super().__init__(owner, account_number, balance)

        self.rate = config.interest_rate

    def add_interest(self):

        interest = self.balance * self.rate

        self.deposit(interest)

    def statement(self):

        print("\n===== Savings Account =====")
        print("Owner:", self.owner)
        print("Account:", self.account_number)
        print("Interest:", self.rate * 100, "%")
        print("Balance:", self.balance)

class CurrentAccount(Account):

    def __init__(self, owner, account_number, balance=0):

        super().__init__(owner, account_number, balance)

        self.overdraft = config.overdraft_limit

    def withdraw(self, amount):

        if amount <= 0:
            raise ValueError("Withdrawal must be positive.")

        if self.balance - amount < -self.overdraft:
            raise ValueError("Overdraft exceeded.")

        self._set_balance(self.balance - amount)

        self.history.append(("withdraw", amount))

        self._notify(f"{self.owner} withdrew {amount} ETB")

    def statement(self):

        print("\n===== Current Account =====")
        print("Owner:", self.owner)
        print("Account:", self.account_number)
        print("Overdraft:", self.overdraft)

class AccountFactory:

    @staticmethod
    def create(kind, owner, account_number, balance=0):

        if kind.lower() == "savings":
            return SavingsAccount(owner, account_number, balance)

        elif kind.lower() == "current":
            return CurrentAccount(owner, account_number, balance)

        else:
            raise ValueError("Invalid account type.")

# Binary Search

def binary_search(items, target):

    low = 0
    high = len(items) - 1

    while low <= high:

        mid = (low + high) // 2

        if items[mid] == target:
            return mid

        elif items[mid] < target:
            low = mid + 1

        else:
            high = mid - 1

    return -1


# Recursive Transaction Total

def recursive_total(history):

    if len(history) == 0:
        return 0

    return history[0][1] + recursive_total(history[1:])


class AccountRegistry:

    def __init__(self):

        self.by_number = {}

        self.order = []

    # Add Account

    def add(self, account):

        self.by_number[account.account_number] = account

        self.order.append(account.account_number)

    # Original O(1) Lookup

    def find(self, account_number):

        return self.by_number.get(account_number)

    #Binary Search

    def find_by_number(self, account_number):

        numbers = sorted(self.by_number.keys())

        index = binary_search(numbers, account_number)

        if index == -1:
            return None

        return self.by_number[numbers[index]]


    def top_by_balance(self, n=5):

        accounts = sorted(

            self.by_number.values(),

            key=lambda account: account.balance,

            reverse=True

        )

        return accounts[:n]


    def total_transactions(self, account_number):

        account = self.find_by_number(account_number)

        if account is None:
            return 0

        return recursive_total(account.history)

    # Show Accounts

    def list_all(self):

        for number in self.order:
            self.by_number[number].statement()

# TESTING

sms = SMSAlert()

audit = AuditLog()

registry = AccountRegistry()


acc1 = AccountFactory.create(

    "savings",

    "Hermela",

    "ACC001",

    5000

)

acc2 = AccountFactory.create(

    "current",

    "Almaz",

    "ACC002",

    3000

)

acc3 = AccountFactory.create(

    "savings",

    "Abel",

    "ACC003",

    9000

)


for account in [acc1, acc2, acc3]:

    account.subscribe(sms)

    account.subscribe(audit)

    registry.add(account)


# Transactions

acc1.deposit(1000)

acc1.deposit(500)

acc1.add_interest()

acc2.withdraw(3500)

acc3.deposit(2000)

acc3.withdraw(1000)


print("\n===== Binary Search =====")

account = registry.find_by_number("ACC001")

if account:

    account.statement()

else:

    print("Account not found.")



print("\n===== Top Accounts =====")

leaders = registry.top_by_balance(3)

for account in leaders:

    print(account.owner, "-", account.balance)


print("\n===== Transaction Total =====")

print(

    "ACC001:",

    registry.total_transactions("ACC001"),

    "ETB"

)

print("\n===== Undo =====")

acc1.undo_last()

acc1.statement()

print("\n===== All Accounts =====")

registry.list_all()


config1 = BankConfig()

config2 = BankConfig()

print("\nSingleton:", config1 is config2)
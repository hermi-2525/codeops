class BankConfig:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
            cls._instance.interest_rate = 0.05
            cls._instance.overdraft_limit = 1000
        return cls._instance


class SMSAlert:
    def update(self, message):
        print("[SMS Alert]", message)


class AuditLog:
    def update(self, message):
        print("[Audit Log]", message)


class Account:
    def __init__(self, owner, number, balance=0):
        self.owner = owner
        self.account_number = number
        self.__balance = balance
        self._observers = []

    @property
    def balance(self):
        return self.__balance

    def subscribe(self, observer):
        self._observers.append(observer)

    def _notify(self, message):
        for observer in self._observers:
            observer.update(message)

    def deposit(self, amount):
        if amount <= 0:
            raise ValueError("Amount must be positive")

        self.__balance += amount
        self._notify(f"Deposited ETB {amount}")

    def withdraw(self, amount):
        if amount <= 0:
            raise ValueError("Amount must be positive")

        if amount > self.__balance:
            raise ValueError("Insufficient balance")

        self.__balance -= amount
        self._notify(f"Withdrew ETB {amount}")

    def statement(self):
        print("Account")
        print("Owner:", self.owner)
        print("Number:", self.account_number)
        print("Balance: ETB", self.balance)


class SavingsAccount(Account):
    def __init__(self, owner, number, balance=0):
        super().__init__(owner, number, balance)
        self.rate = BankConfig().interest_rate

    def add_interest(self):
        self.deposit(self.balance * self.rate)

    def statement(self):
        print("Savings Account")
        super().statement()


class CurrentAccount(Account):
    def __init__(self, owner, number, balance=0):
        super().__init__(owner, number, balance)
        self.overdraft = BankConfig().overdraft_limit

    def withdraw(self, amount):
        if amount <= 0:
            raise ValueError("Amount must be positive")

        if self.balance - amount < -self.overdraft:
            raise ValueError("Overdraft limit exceeded")

        self._Account__balance -= amount
        self._notify(f"Withdrew ETB {amount}")

    def statement(self):
        print("Current Account")
        super().statement()


class AccountFactory:
    @staticmethod
    def create(kind, owner, number, balance=0):
        if kind == "savings":
            return SavingsAccount(owner, number, balance)

        elif kind == "current":
            return CurrentAccount(owner, number, balance)

        else:
            raise ValueError("Unknown account type")


sms = SMSAlert()
log = AuditLog()

account1 = AccountFactory.create("savings", "Hermela", "S001", 2000)
account2 = AccountFactory.create("current", "John", "C001", 500)

account1.subscribe(sms)
account1.subscribe(log)

account2.subscribe(sms)
account2.subscribe(log)

account1.add_interest()
account2.withdraw(1000)

accounts = [account1, account2]

for account in accounts:
    account.statement()
    print()

config1 = BankConfig()
config2 = BankConfig()

print("Singleton:", config1 is config2)
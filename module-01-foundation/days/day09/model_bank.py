from collections import deque


class Account:
    def __init__(self, account_number, owner, balance):
        self.account_number = account_number
        self.owner = owner
        self.balance = balance

    def __str__(self):
        return f"{self.account_number} | {self.owner} | Balance: {self.balance}"


class Branch:
    def __init__(self, name):
        self.name = name
        self.children = []
        self.accounts = []

    def add_child(self, child):
        self.children.append(child)

    def add_account(self, account):
        self.accounts.append(account)

    def total_balance(self):
        total = 0

        for account in self.accounts:
            total += account.balance

        for child in self.children:
            total += child.total_balance()

        return total


transfers = {
    "ACC001": ["ACC002", "ACC003"],
    "ACC002": ["ACC004"],
    "ACC003": ["ACC005"],
    "ACC004": [],
    "ACC005": ["ACC006"],
    "ACC006": []
}


def bfs(transfers, start):
    visited = set()
    queue = deque([start])

    while queue:
        account = queue.popleft()

        if account not in visited:
            visited.add(account)

            for neighbor in transfers[account]:
                queue.append(neighbor)

    return visited


head_office = Branch("Head Office")

region1 = Branch("Region 1")
region2 = Branch("Region 2")

branch1 = Branch("Branch 1")
branch2 = Branch("Branch 2")

head_office.add_child(region1)
head_office.add_child(region2)

region1.add_child(branch1)
region2.add_child(branch2)

head_office.add_account(Account("ACC001", "John", 1000))
region1.add_account(Account("ACC002", "Mary", 2000))
region2.add_account(Account("ACC003", "Tom", 1500))
branch1.add_account(Account("ACC004", "Sara", 3000))
branch2.add_account(Account("ACC005", "David", 2500))

print("Total Bank Balance")
print(head_office.total_balance())

print("\nReachable Accounts from ACC001")
print(bfs(transfers, "ACC001"))
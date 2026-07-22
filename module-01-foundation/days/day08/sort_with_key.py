accounts = [
    ("John", 500),
    ("Mary", 1200),
    ("Tom", 800),
    ("Sara", 1500),
    ("David", 900)
]

sorted_accounts = sorted(
    accounts,
    key=lambda account: account[1],
    reverse=True
)

print("Accounts Sorted by Balance\n")

for account in sorted_accounts:
    print(account)
import time
account_list = []
account_dict = {}

for i in range(100000):
    account = f"ACC{i}"
    account_list.append(account)
    account_dict[account] = account
    target = "ACC99999"

start = time.time()

found = target in account_list

end = time.time()

print("List Lookup:", end - start)
start = time.time()

found = target in account_dict

end = time.time()

print("Dictionary Lookup:", end - start)
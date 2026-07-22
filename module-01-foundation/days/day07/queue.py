from collections import deque

queue = deque()

queue.append("John")
queue.append("Mary")
queue.append("Tom")
queue.append("Sara")
queue.append("David")

while queue:
    print("Serving:", queue.popleft())
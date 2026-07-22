import heapq

queue = []

heapq.heappush(queue, (3, "Study"))
heapq.heappush(queue, (1, "Pay Rent"))
heapq.heappush(queue, (5, "Watch TV"))
heapq.heappush(queue, (2, "Assignment"))
heapq.heappush(queue, (4, "Exercise"))

print("Tasks by Priority")

while queue:
    priority, task = heapq.heappop(queue)
    print(priority, "-", task)
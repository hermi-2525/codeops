class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class LinkedList:
    def __init__(self):
        self.head = None

    def push_front(self, data):
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node

    def print_all(self):
        current = self.head

        while current is not None:
            print(current.data)
            current = current.next


linked_list = LinkedList()

linked_list.push_front("John")
linked_list.push_front("Mary")
linked_list.push_front("Tom")
linked_list.push_front("Sara")

print("Linked List:")
linked_list.print_all()
class book:
    def __init__(self, title, author, page):
        self.title = title
        self.author = author
        self.page = page

    def describe(self):
        print(f"Title: {self.title}, Author: {self.author}, Pages: {self.page}")
        
book1 = book("abebe's journy", "abebe", 200)
book2 = book("kebede's life", "kebede", 300)

book1.describe()
book2.describe()
print(book1.title)
print(book2.title)
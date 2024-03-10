
class library:
    def __init__(self, books = 0):
        self.books = books

    def add(self, newBooks):
        if newBooks > 0:
            self.books += newBooks
            return True
        else:
            return False
    
    # def Borrow(self,l newBooks):
    #     if 0 < newBooks <= self.books:
    #         self.books
    #         pass
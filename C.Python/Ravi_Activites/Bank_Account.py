
class BankAccount:
    def __init__(self, balance = 0):
        self.balance = balance

    def deposit(self, amount):
        if amount > 1000:
            self.balance = balance + amount
            return True
        else:
            return False

    def withdraw(self, amount):
        if 0 < amount <= self.balance:
            self.balance = balance - amount
            return True
        else:
            return False
    
    def get_balance(self):
        return self.balance

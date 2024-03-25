
class StudentFees:
    def __init__(self, fees=0):
        self.fees = fees

    def deposite(self, amount):
        if amount > 0:
            self.fees = fees + amount
            return True
        else:
            return False

    def get_fees(self):
        return self.fees
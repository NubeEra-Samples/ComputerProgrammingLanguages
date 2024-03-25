
# test_bank_account.py
import unittest
from bank_account import BankAccount

class TestBankAccount(unittest.TestCase):
    def setUp(self):
        self.account = BankAccount()

    def test_initial_balance(self):
        self.assertEqual(self.account.get_balance(), 0)

    def test_deposit(self):
        self.assertTrue(self.account.deposit(100))
        self.assertEqual(self.account.get_balance(), 100)

    def test_withdraw(self):
        self.account.deposit(100)
        self.assertTrue(self.account.withdraw(50))
        self.assertEqual(self.account.get_balance(), 50)

    def test_invalid_withdraw(self):
        self.assertFalse(self.account.withdraw(50))

if __name__ == '__main__':
    unittest.main()

# python -m unittest test_bank_account.py

# ba1 = BankAccount(1500)
# print("Start Balance: ",ba1.get_balance())   
# ba1.deposite(300)
# print("After Deposite Balance: ",ba1.get_balance())   
# ba1.withdraw(150)
# print("After WithDraw Balance: ",ba1.get_balance())   
# ba1.withdraw(1650)
# print("Second time WithDraw Balance: ",ba1.get_balance())   
# ba1.withdraw(100)
# print("Hacked WithDraw Balance: ",ba1.get_balance()) 
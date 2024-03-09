
import unittest
from Bank_Account import BankAccount

class TestBankAccount(unittest.TestCase):
    def setUp(self):
        self.account = BankAccount()

    def test_initial_balance(self):
        self.assertEqual(self.account.get_balance(),0)

    def test_deposite(self):
        self.assertTrue(self.account.deposite(1500))
        self.assertEqual(self.account.get_balance(), 1500)

    def test_withdraw(self):
        self.account.deposit(1500)
        self.assertTrue(self.account.withdraw(1200))
        self.assertEqual(self.account.get_balance(), 300)

    def test_invalid_withdraw(self):
        self.assertFalse(self.account.withdraw(1000))

    if __name__ == "__main__":
        unittest.main()
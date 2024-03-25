
import unittest
from Student_fees import StudentFees

class TestStudentFees(unittest.TestCase):
    def setUp(self):
        self.School = StudentFees()

    def test_initial_fees(self):
        self.assertEqual(self.School.get_fees(), 0)

    def test_deposite(self):
        self.assertTrue(self.School.fees(20000))
        self.assertEquals(self.School.get_fees(), 20000)

    if __name__ == '__main__':
        unittest.main()
const express = require('express');
const router = express.Router();
const Staff = require('../models/staff');
const Salary = require('../models/staffSalary');

// Get salaries for a specific month and year
  exports.getAllSalaries =  async (req, res) => {
  const { month, year } = req.query;

  try {
    const salaries = await Salary.find({ month, year }).populate('staff', 'name');
    const response = salaries.map(salary => ({
      staffId: salary.staff._id,
      name: salary.staff.name,
      amount: salary.amount,
    }));
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update salaries for a specific month and year
 exports.updateSalaries = async (req, res) => {
  const { month, year, salaries } = req.body; // salaries should be an array of { staffId, amount }

  try {
    const updates = salaries.map(async ({ staffId, amount }) => {
      await Salary.findOneAndUpdate(
        { staff: staffId, month, year },
        { amount },
        { upsert: true, new: true }
      );
    });
    await Promise.all(updates);
    res.status(200).json({ message: 'Salaries updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



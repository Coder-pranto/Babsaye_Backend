const Salary = require('../models/staffSalary');

// Create or update salary for a staff member
exports.createOrUpdateSalary = async (req, res) => {
  const { staffId, month, year, salary } = req.body;

  try {
    let salaryRecord = await Salary.findOne({ staff: staffId, month, year });

    if (salaryRecord) {
      salaryRecord.salary = salary;
    } else {
      salaryRecord = new Salary({ staff: staffId, month, year, salary });
    }

    await salaryRecord.save();
    res.status(200).json(salaryRecord);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get salary records by staff member
exports.getSalariesByStaff = async (req, res) => {
  try {
    const salaries = await Salary.find({ staff: req.params.staffId }).populate('staff');
    res.status(200).json(salaries);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get salary record by ID
exports.getSalaryById = async (req, res) => {
  try {
    const salary = await Salary.findById(req.params.id).populate('staff');
    if (!salary) return res.status(404).json({ message: 'Salary record not found' });
    res.status(200).json(salary);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a salary record
exports.deleteSalary = async (req, res) => {
  try {
    const salary = await Salary.findByIdAndDelete(req.params.id);
    if (!salary) return res.status(404).json({ message: 'Salary record not found' });
    res.status(200).json({ message: 'Salary record deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


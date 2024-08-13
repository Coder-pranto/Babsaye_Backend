const Staff = require('../models/staff');

// Create a new staff member
exports.createStaff = async (req, res) => {
  try {
    const staff = new Staff({
      ...req.body,
      image: req.file ? req.file.path : null
    });
    await staff.save();
    res.status(201).json(staff);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all staff members
exports.getStaff = async (req, res) => {
  try {
    const staff = await Staff.find();
    res.status(200).json(staff);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get a single staff member by ID
exports.getStaffById = async (req, res) => {
  try {
    const staff = await Staff.findById(req.params.id);
    if (!staff) return res.status(404).json({ message: 'Staff member not found' });
    res.status(200).json(staff);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a staff member by ID
exports.updateStaff = async (req, res) => {
  try {
    const updatedData = req.body;
    if (req.file) updatedData.image = req.file.path;
    
    const staff = await Staff.findByIdAndUpdate(req.params.id, updatedData, { new: true });
    if (!staff) return res.status(404).json({ message: 'Staff member not found' });
    res.status(200).json(staff);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update multiple staff salaries
// exports.updateStaffSalaries = async (req, res) => {
//   const updates = req.body; // Array of staff updates [{ id, salary }, { id, salary }, ...]

//   try {
//     for (let update of updates) {
//       await Staff.findByIdAndUpdate(update.id, { salary: update.salary });
//     }
//     res.status(200).json({ message: 'Salaries updated successfully' });
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };


// Delete a staff member by ID
exports.deleteStaff = async (req, res) => {
  try {
    const staff = await Staff.findByIdAndDelete(req.params.id);
    if (!staff) return res.status(404).json({ message: 'Staff member not found' });
    res.status(200).json({ message: 'Staff member deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

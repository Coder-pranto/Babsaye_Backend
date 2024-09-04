const UserDocument = require('../models/userDocument');

const uploadUserDocuments = async (req, res) => {
  try {
    const { userId } = req.body; 

    const nidFrontPath = req.files.nidFront[0].path;
    const nidBackPath = req.files.nidBack[0].path;
    const tradeLicencePath = req.files.tradeLicence[0].path;

    const userDocument = new UserDocument({
      userId,
      nidFront: nidFrontPath,
      nidBack: nidBackPath,
      tradeLicence: tradeLicencePath,
    });

    await userDocument.save();
    res.status(200).json({ message: 'Files uploaded successfully!', data: userDocument });
  } catch (error) {
    console.error('Error uploading files:', error.message);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
  uploadUserDocuments,
};

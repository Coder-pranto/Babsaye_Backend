const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload'); 
const { uploadUserDocuments } = require('../controllers/userDocumentController');

router.post('/upload', upload.fields([
  { name: 'nidFront', maxCount: 1 },
  { name: 'nidBack', maxCount: 1 },
  { name: 'tradeLicence', maxCount: 1 }
]), uploadUserDocuments);

module.exports = router;

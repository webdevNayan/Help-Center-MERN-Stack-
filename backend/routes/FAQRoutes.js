const express = require('express');
const router = express.Router();
const helpCenterController = require('../controllers/helpCenterController');

// Create an invoice
router.post('/', helpCenterController.createFAQ);

// Get all invoices
router.get('/', helpCenterController.getFAQ);

// Get a single invoice by Order Number
router.get('/:title', helpCenterController.getFAQByTitle);

module.exports = router;

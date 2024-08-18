const FAQS = require('../models/HelpCenter');

// Create an FAQS
exports.createFAQ = (req, res) => {
    const newFAQS = new FAQS(req.body);

    newFAQS.save()
        .then(FAQS => res.json(FAQS))
        .catch(err => res.status(400).json({ error: 'Unable to save the FAQS' }));
};

// Get all FAQSs
exports.getFAQ = (req, res) => {
    FAQS.find()
        .then(FAQSs => res.json(FAQSs))
        .catch(err => res.status(404).json({ noFAQSsfound: 'No FAQSs found' }));
};

// Get a single FAQS by Order Number
exports.getFAQByTitle = (req, res) => {
    FAQS.findOne({ 'title': req.params.title })
        .then(FAQS => res.json(FAQS))
        .catch(err => res.status(404).json({ noinvoivefound: 'No FAQS found with that Title' }));
};

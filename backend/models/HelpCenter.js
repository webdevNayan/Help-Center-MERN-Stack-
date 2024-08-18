const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create FAQ Schema with nested faqs object
const FAQSchema = new Schema({
    title: String,
    description: String
});

module.exports = mongoose.model('FAQs', FAQSchema);

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rentalSchema = new Schema({
    title: { type: String, required: true, max: [150, 'Title is too long, max is 150 chars']},
    city: { type: String, required: true, lowercase: true },
    street: { type: String, required: true, min: [4, 'Street should be a min of 4 chars']},
    category: { type: String, required: true, lowercase: true },
    image: { type: String, required: true },
    bedrooms: Number,
    shared: Boolean,
    description: { type: String, required: true },
    dailyRate: Number,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Rental', rentalSchema );
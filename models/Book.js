const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
    unique: true,
    trim: true,
    maxlength: [50, 'Name can not be more than 50 characters'],
  },
  author: {
    type: String,
    required: [true, 'Please add an author'],
    maxlength: [50, 'Author can not be more than 500 characters'],
  },
  description: {
    type: String,
    maxlength: [500, 'Description can not be more than 500 characters'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Book', BookSchema);

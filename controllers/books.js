const ErrorResponse = require('../utils/errorResponse');

const Book = require('../models/Book');

// @desc      Get all books
// @route     GET /api/v1/books
// @access    Public
exports.getBooks = async (req, res, next) => {
  try {
    const books = await Book.find();

    res.status(200).json({ success: true, count: books.length, data: books });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc      Get single book
// @route     GET /api/v1/books/:id
// @access    Public
exports.getBook = async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      return next(
        new ErrorResponse(`Book not found with id of ${req.params.id}`, 404)
      );
    }

    res.status(200).json({ success: true, data: book });
  } catch (err) {
    // res.status(400).json({ success: false });
    next(new ErrorResponse(`Book not found with id of ${req.params.id}`, 404));
  }
};

// @desc    Create new book
// @route   POST /api/v1/books
// @access  Private
exports.createBook = async (req, res, next) => {
  try {
    const book = await Book.create(req.body);

    res.status(201).json({
      success: true,
      data: book,
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc      Update book
// @route     PUT /api/v1/books/:id
// @access    Private
exports.updateBook = async (req, res, next) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!book) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({ success: true, data: book });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc      Delete book
// @route     DELETE /api/v1/books/:id
// @access    Private
exports.deleteBook = async (req, res, next) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);

    if (!book) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

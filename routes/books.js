const express = require('express');
const {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
} = require('../controllers/books');

const router = express.Router();

router.route('/').get(getBooks).post(createBook);

router
  .route('/:id')
  .get(getBook)
  .put(updateBook)
  .patch(updateBook)
  .delete(deleteBook);

module.exports = router;

const express = require('express')
const booksController = require('../../controllers/books')

const router = express.Router()

router.get('/', booksController.getAll)
router.get('/:id', booksController.getById)
router.post('/', booksController.add)
router.put('/:id', booksController.updateById)
router.delete('/:id', booksController.deleteById)

module.exports = router
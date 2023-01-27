const express = require('express')
const booksController = require('../../controllers/books')
const { controllerExceptionWrapper } = require('../../helpers')
const { validateBody } = require('../../middlewares')
const { addBookSchema } = require('../../helpers/schemas')

const router = express.Router()

router.get(
  '/',
  controllerExceptionWrapper(booksController.getAll),
)
router.get(
  '/:id',
  controllerExceptionWrapper(booksController.getById),
)
router.post(
  '/',
  validateBody(addBookSchema),
  controllerExceptionWrapper(booksController.add),
)
router.put(
  '/:id',
  validateBody(addBookSchema),
  // Це те ж саме ... 
  // controllerExceptionWrapper(booksController.updateById),

  // ... що це
  async (req, res, next) => {
    try {
      await booksController.updateById(req, res, next)
    } catch (error) {
      next(error)
    }
  }
)
router.delete(
  '/:id',
  controllerExceptionWrapper(booksController.deleteById),
)

module.exports = router
const express = require('express')
const booksController = require('../../controllers/books')
const { controllerExceptionWrapper } = require('../../helpers')
const { validateBody, authUser } = require('../../middlewares')
const { addBookSchema } = require('../../helpers/schemas')

const router = express.Router()

router
  .get(
    '/',
    controllerExceptionWrapper(booksController.getAll),
  )
  .get(
    '/:id',
    controllerExceptionWrapper(booksController.getById),
  )
  .post(
    '/',
    authUser,
    validateBody(addBookSchema),
    controllerExceptionWrapper(booksController.add),
  )
  .put(
    '/:id',
    validateBody(addBookSchema),
    controllerExceptionWrapper(booksController.updateById),
  )
  .delete(
    '/:id',
    controllerExceptionWrapper(booksController.deleteById),
  )

module.exports = router
const express = require("express")
const cors = require("cors")
const multer = require('multer')
const path = require('path')
const fsp = require('fs/promises')
const { nanoid } = require('nanoid')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('public'))

function createPath(entityName) {
  return path.join(__dirname, 'public', entityName)
}

// const tempDirPath = path.join(__dirname, 'temp')
// const bookDirPath = path.join(__dirname, 'public', 'books')

const multerConfig = multer.diskStorage({
  destination: function (req, file, cb) {
    const lastPathPart = req.url.split('/').pop()
    const filePath = createPath(lastPathPart)
    cb(null, filePath)
  },
  filename: function (req, file, cb) {
    const filename = file.originalname;
    cb(null, filename)
  }
})

const upload = multer({ storage: multerConfig })

const books = []

app.get('/api/books', async (req, res, next) => {
  res.json(books)
})

app.post(
  '/api/books',
  // upload.array('cover'), // для multiple files в одному інпуті
  // upload.fields('cover'), // для різних файлових інпутів 
  upload.single('cover'),
  async (req, res, next) => {
    console.log(req.body) // текстові поля
    console.log(req.file) // файл / файли

    // Не потрібно сюди прописувати `public`, оскыльки ми вже його вказали в мідлварі на статичні файли!
    // const filePath = path.join('public', 'books', req.file.filename) // No!
    const filePath = path.join('books', req.file.filename) // Yes!
    console.log(filePath)

    const newBook = {
      id: nanoid(),
      filePath,
    }

    books.push(newBook)
    // Перейменування = переміщення
    // fsp.rename(req.file.path, bookDirPath)

    res.json(newBook)
  },
)

app.listen(3000)


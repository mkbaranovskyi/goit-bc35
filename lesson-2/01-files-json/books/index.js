const fsp = require('fs/promises');
const { nanoid } = require('nanoid');
const path = require('path');

const booksPath = path.join(__dirname, 'books.json');

const updateBookList = async (books) => await fsp.writeFile(booksPath, JSON.stringify(books, null, 2));

const getAll = async () => {
  const books = await fsp.readFile(booksPath);
  const result = JSON.parse(books);
  return result;
};

const getById = async (id) => {
  const books = await getAll();

  const book = books.find((book) => book.id === id);
  if (!book) {
    throw new Error('The book is not found');
  }

  return book;
}

const create = async ({ title, author }) => {
  const books = await getAll();

  const newBook = {
    id: nanoid(),
    title,
    author,
  };

  books.push(newBook);
  await updateBookList(books);

  return newBook;
};

const updateById = async (id, data) => {
  const books = await getAll();

  const index = books.findIndex((book) => book.id === id);
  if (index === -1) {
    throw new Error('The book is not found');
  }

  books[index] = { id, ...data };
  await updateBookList(books);

  return books[index];
};

const removeById = async (id) => {
  const books = await getAll();

  const index = books.findIndex((book) => book.id === id);
  if (index === -1) {
    throw new Error('The book is not found');
  }

  books.splice(index, 1);

  await updateBookList(books);

  return books[index];
};

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  removeById,
};

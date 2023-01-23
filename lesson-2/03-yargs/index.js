const booksRepository = require('./books');
const yargs = require('yargs');

run();

async function run() {
  try {
    const arguments = process.argv;
    const { argv } = yargs(arguments);

    invokeAction(argv);

  } catch (error) {
    console.log(error);
  }
}


async function invokeAction({
  action,
  id,
  title,
  author,
}) {
  switch (action) {
    case 'getAll': {
      const allBooks = await booksRepository.getAll();
      console.log(allBooks);
      break;
    }
    case 'getById': {
      const book = await booksRepository.getById(id);
      console.log(book);
      break;
    }
    case 'create': {
      const createdBook = await booksRepository.create({ title, author });
      console.log(createdBook);
      break;
    }
    case 'updateById': {
      const allBooks = await booksRepository.updateById(id, { title, author });
      console.log(allBooks);
      break;
    }
    case 'removeById': {
      const removedBook = await booksRepository.removeById(id);
      console.log(removedBook);
      break;
    }
    default: {
      console.log('Incorrect action');
    }
  }
}
const { program } = require('commander');
const booksRepository = require('./books');
const { ACTIONS } = require('./enums');

run();

async function run() {
  try {
    program.option('-a --action <string>')
      .option('-i --id <string>')
      .option('-t --title <string>')
      .option('-at --author <string>');

    program.parse(process.argv);

    const options = program.opts();

    invokeAction(options);
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
    case ACTIONS.GET_ALL: {
      const allBooks = await booksRepository.getAll();
      console.log(allBooks);
      break;
    }
    case ACTIONS.GET_BY_ID: {
      const book = await booksRepository.getById(id);
      console.log(book);
      break;
    }
    case ACTIONS.CREATE: {
      const createdBook = await booksRepository.create({ title, author });
      console.log(createdBook);
      break;
    }
    case ACTIONS.UPDATE_BY_ID: {
      const allBooks = await booksRepository.updateById(id, { title, author });
      console.log(allBooks);
      break;
    }
    case ACTIONS.REMOVE_BY_ID: {
      const removedBook = await booksRepository.removeById(id);
      console.log(removedBook);
      break;
    }
    default: {
      console.log('Incorrect action');
    }
  }
}
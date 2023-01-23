const booksRepository = require('./books');

run();

async function run() {
  try {
    // const result = await booksRepository.getById('u9kgwNWGi3uUUwh0b8V4');
    // console.log(result);

    // const newBook = await booksRepository.create({ author: 'Vasya', title: 'My life' });
    // console.log(newBook);

    // const updated = await booksRepository.updateById(
    //   'tpzezCE3Is5FwIGMy-W9K',
    //   {
    //     author: 'Masha',
    //     title: 'Her life and love',
    //   },
    // );

    await booksRepository.removeById('tpzezCE3Is5FwIGMy-W9K');

  } catch (error) {
    console.log(error);
  }
}


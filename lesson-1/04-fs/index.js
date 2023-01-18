// Не потрібно встановлювати через `npm i fs`, тому що це один з базових пакетів, який завжди доступний ноді
import fsp from 'fs/promises';
import userList from './users/user-list.js';


// АХТУНГ! У 18 ноді мають працювати евейти на верхньому рівні. Якщо у вас не працюють - огорніть в асинхронну функцію, як завжди
// async function run() {
//   await ...
// }
// run();


// Повторна спроба створити існуючу папку викликає помилку 

// Варіант 1: обробити, додавши `catch` обробник промісу
// await fsp.mkdir('./files').catch((err) => console.log('Directory already exists'));

// Варіант 2: звичайний try-catch
// try {
//   await fsp.mkdir('./files');
// } catch (error) {
//   console.log('The directory already exists');
// }

// Варіант 3: почитати доку та побачити, що додавання опції рекурсивного створення не буде викидати помилку (а також зможе створити одразу декілька папок)
await fsp.mkdir('./files', { recursive: true });

// await fsp.writeFile('./files/users.txt', userList.ourUsers.toString());

// await fsp.appendFile('./files/users.txt', '\n' + userList.ourUsers.toString());

const retrievedUsers = await fsp.readFile('./files/users.txt', {
  encoding: 'utf8',
});

console.log(retrievedUsers);

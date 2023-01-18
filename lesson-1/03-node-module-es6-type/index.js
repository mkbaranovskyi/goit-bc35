// Варіант 1 - з індекс файлу:
import * as usersAndAdmins from'./users/index.js';

console.log(usersAndAdmins.admins);
console.log(usersAndAdmins.users);

// Варіант 2 - з індекс файлу:
import { admins, users } from './users/index.js';

console.log(admins);
console.log(users);

// Варіант 3 - напряму з файлу
import { carList } from './cars/car-list.js';

console.log(carList);

// Варіант 4 - дефолтний експорт (краще уникати)
import foodList from './food/food-list.js';

console.log(foodList);
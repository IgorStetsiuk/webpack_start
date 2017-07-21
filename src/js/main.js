import userList from './userList';
import '../scss/style.scss';

import '../img/grumpy_cat.jpg';
import '../img/kuki_cat.jpg';
import '../img/serious_cat.jpg';

// Comment # 1

const users = [
    {name: 'Oksana', age: 22},
    {name: 'Viktor', age: 14},
    {name: 'Ivan', age: 37},
    {name: 'Yana', age: 45},
    {name: 'Oleksandr', age: 19},
    {name: 'Olena', age: 18},
    {name: 'Mykola', age: 27},
    {name: 'Andriy', age: 33},
    {name: 'Zakhar', age: 40}
];

const userListModule = new userList(users);
userListModule.showList();
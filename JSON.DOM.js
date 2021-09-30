// різниця

// let name // undefined
// let age = null
// console.log(name)
// console.log(age)


let user = {
    name: 'Kolya',
    age: 27,
    car: false,
    girl: undefined,
    dother: {
        name: 'Milana',
        age: 1
    }
}

let strings = Object.keys(user);
console.log(strings);
let value = Object.values(user);
console.log(value)
let entries = Object.entries(user);
console.log(entries)


// Цикли!

let arr = [1, 4, 125, 5, 213, 21, 6, true]

for (const value of arr) {
    console.log(value); // перераховує по порядку
}
// Ітерація обєктів

for (const valueIn in user) {
    console.log(valueIn)
}


for (let a = 0; a <= 2; a++) {
    console.log(a);
}

// скорочуєм *_*

let g = 0;
for (; g < 2;) {
    console.log(g++);
}


// break


// let sum = 0;
//
// while (true) {
//     let value = +prompt('write number')
// if (!value) break;
// sum += value;
// }
//
// alert( 'number' + sum);




// let student = {
//     name: 'John',
//     age: 30,
//     isAdmin: false,
//     courses: ['html', 'css', 'js'],
//     wife: null
// };
//
// let json = JSON.stringify(student);
//
// alert(typeof json); // мы получили строку!
//
// alert(json);


// for (let value in user) {
//     console.log(value)
//     console.log(user.value)
//     console.log(user[value])
//     console.log(user['value'])
// }



// mutacion

let a = "Hello";

let b = a;

a = 'World'

console.log(b)
console.log(a)


let clone = user;

user.name = 'Olya';
user.age = 15;

console.log(clone);

// JSON !!!!


//
// let json = JSON.stringify(user)
//
// console.log(json)

// let par = 4321;
//
// let parse = JSON.parse(par);
//
// console.log(parse)

// Перетворення стрінги в намбер і наоборот

// let str = "123";
// alert(typeof str); // string
//
// let num = Number(str); // становится числом 123
//
// alert(typeof num);


let str = '1234';
console.log(str)

let num = 1234;
console.log(num)

console.log(typeof str)
console.log(toString(num))
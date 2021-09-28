let user = {
    name: 'Kolya',
    age: 27,
    car: false,
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

let arr = [1,4,125,5,213,21,6, true]

for (const value of arr) {
    console.log(value);
}
// Ітерація обєктів

for (const valueIn in user) {
    console.log(valueIn)
}
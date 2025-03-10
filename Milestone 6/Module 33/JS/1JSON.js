const person = {
    name: 'Faysal',
    age: 23,
    friends: ['Ahmed', 'Patwary'],
    status: true
}

const newPerson = JSON.stringify(person);
console.log(newPerson);
console.log(typeof newPerson);

const newPerson2 = JSON.parse(newPerson);
console.log(newPerson2);
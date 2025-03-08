const person = {
    name: 'John',
    age: 30,
    hobbies: ['reading', 'music', 'movies'],
    greet: function() {
        console.log('Hello everyone!');
    }
};

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

person.status = 'single';
console.log(person);

Object.seal(person);

person.love = 'none';
console.log(person); //value will not added

Object.freeze(person);
const person = {
    name: 'Faysal',
    age: 23,
    profession: 'Developer',
    salary: 24000,
    'married status': false
};
console.log(person);

console.log(person.profession);

const income = person.salary;
console.log(income);


console.log(person['age']);
console.log(person["married status"]);

console.log(person.age);
person.age = 24;
console.log(person);


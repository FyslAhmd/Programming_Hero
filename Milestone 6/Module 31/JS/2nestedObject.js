const person = {
    name: 'Faysal',
    age: 30,
    friends: ['Ahmed','Patwary'],
    details: {
        job: 'Yes',
        isMarried: false,
        status: 'not found'
    }
}

console.log(person.friends[1]);
console.log(person.details.job);
console.log(person.details?.job?.name);

console.log(person['age']);
console.log(person['details']['job']);
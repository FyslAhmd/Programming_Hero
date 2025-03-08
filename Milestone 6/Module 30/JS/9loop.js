const person = {
    name: 'Faysal',
    age: 23,
    country: 'BD'
}

// console.log(person);

// for(let key in person) {
//     console.log(key, person[key]);
// }

for(let key of Object.entries(person)) {
    console.log(key[0], key[1]);
}

for(let [key,value] of Object.entries(person)) {
    console.log(key, value);
}
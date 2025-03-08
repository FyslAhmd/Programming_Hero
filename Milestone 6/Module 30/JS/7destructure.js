const faysal = {
    name: 'Faysal',
    age: 24,
    job: 'Web Developer',
    friends: ['Fahim', 'Rakib', 'Rakibul'],
    status: 'Single'
}
const faysalS = faysal.status;
console.log(faysalS);

// Destructuring Object
const { name, age, job, friends, status } = faysal;
console.log(name);
console.log(age);
console.log(job);
console.log(friends);
console.log(status);


const person = ['faysal', 'ahmed', 'patwary']
const [firstName, lastName, lastName2] = person;
console.log(firstName);
console.log(lastName);
console.log(lastName2);
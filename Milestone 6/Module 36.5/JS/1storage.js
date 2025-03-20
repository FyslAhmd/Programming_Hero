// const number = 23;
// localStorage.setItem('myAge', number);

// console.log(localStorage.getItem('myAge'));

// const handleLocalStorage = () => {
//     const name = "Faysal Ahmed";
//     localStorage.setItem('myName', name);
//     console.log(localStorage.getItem('myName'));
// }

const handleLocalStorage = () => {
    const person = {
        name: 'Faysal Ahmed',
        age: 23,
        friends: ['Rakib', 'Rakibul', 'Rakibul Islam']
    }

    const conPerson = JSON.stringify(person);
    console.log(conPerson);
    localStorage.setItem('person', conPerson);

}
const data = localStorage.getItem('person');
console.log(data);
const conData = JSON.parse(data);
console.log(conData);
const student = {
    name: 'Faysal Ahmed',
    id: 4699,
    address: 'Dhaka, Bangladesh',
    isStudent: true,
    friends: ['Fahim', 'Sakib', 'Rakib'],
    car: {
        name: 'Toyota',
        model: '2020',
        color: 'Black'
    },
    acting: function (name) {
        return name + ' is acting';
    }
}

console.log(student);
console.log(student.car);
console.log(student.acting('Faysal'));
function sum(a,b,c) {
    console.log(a,b,c);
    console.log(arguments);

    const newArg = [...arguments];
    console.log(newArg);
}

sum(10,20,30,40,50,60);
console.log(sum.length);




function test(name) {
    console.log(name);
    name = 'Faysal';
}

let name = 'Masud';
test(name);
console.log(name);



const person = {
    name: 'Faysal',
    age: 23,
}

function changeName(p) {
    p.name = 'Ahmed';
}

changeName(person);
console.log(person);
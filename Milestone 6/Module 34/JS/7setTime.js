console.log(1);
console.log(2);
console.log(3);

setTimeout(() => {
    console.log('Hello');
},1000)

const clockID = setInterval(()=> {
    console.log('Hellooooo');

    clearInterval(clockID);
},3000);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
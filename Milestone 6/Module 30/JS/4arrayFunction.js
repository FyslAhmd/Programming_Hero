function sum(a, b) {
    return a + b;
}
console.log(sum(1, 2)); // 3


const sum2 = (a,b) => a + b;
console.log(sum2(1, 2)); // 3

const test = () => console.log('test');
test(); // test

const test2 = num => num*num;
console.log(test2(2)); // 4

const test3 = (num1, num2) => num1*num2;
console.log(test3(2, 3)); // 6

const test4 = (num1, num2) => {
    return num1/num2;
}
console.log(test4(6, 3)); // 2
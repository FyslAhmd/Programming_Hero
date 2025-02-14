function multiply (num1,num2) {
    if(typeof num1==='number' && typeof num2==='number') {
        return num1*num2;
    }
    return "Provide valid argument";
}

console.log(multiply(5,7));
console.log(multiply(5+5,7*7));
console.log(multiply(5,'seven'));


//
function fullName(fName,lName) {
    if(typeof fName === 'string' && typeof lName === 'string') {
        return fName+' '+lName;
    }
    return "Provide valid argument";
}
console.log(fullName('Faysal','Ahmed'));
console.log(fullName('Faysal',5));
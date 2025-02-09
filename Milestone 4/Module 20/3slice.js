const address = 'Andorlkilla';
const part = address.slice(2,5);
console.log(part);

const sentence = 'I am a good and hard working person';
console.log(sentence.split(' '));
console.log(sentence.split('a'));

const fName = "Faysal";
const lName = "Ahmed";
const fullName = fName + ' ' + lName;
const fullName2 = fName.concat(' ').concat(lName);
console.log(fullName);
console.log(fullName2);
console.log(lName.includes('A'));
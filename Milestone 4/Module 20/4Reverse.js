const sentence = 'I want to learn web dev';

let reverse = '';
for(const letter of sentence) {
    reverse = letter + reverse;
}
console.log(reverse);

let rev = '';
for(let i = 0; i < sentence.length; i++) {
    rev = sentence[i] + rev;
}
console.log(rev);

const reversed = sentence.split('').reverse().join('');
console.log(reversed);
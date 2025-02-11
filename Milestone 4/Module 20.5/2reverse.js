const numbers = [1,2,3,4,5,6,7];

// numbers.reverse()



const rev_num = [];
for(const num of numbers) {
    rev_num.unshift(num);
}
// console.log(rev_num);



let reversed_num = [];
for(let i = numbers.length-1; i >= 0; i--) {
    reversed_num.push(numbers[i]);
}
// console.log(reversed_num);
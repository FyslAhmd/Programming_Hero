function evenOnly(numbers) {
    const even = [];
    for(const number of numbers) {
        if(number%2==0) {
            even.push(number);
        }
    }
    return even;
}

const number = evenOnly([1,2,3,4,5,6,7,8]);
console.log(number);
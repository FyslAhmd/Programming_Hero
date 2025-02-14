const heights = [65,100,75,30,102,50,70];

function getMax(numbers) {
    let max = numbers[0];
    for(const number of numbers) {
        if(number > max) {
            max = number;
        }
    }
    return max;
}

const max = getMax(heights);
console.log(max);
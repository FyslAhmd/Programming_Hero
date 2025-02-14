function noDuplicate(items) {
    const unique = [];
    for(const item of items) {
        if(unique.includes(item) === false) {
            unique.push(item);
        }
    }
    return unique;
}


const biriyaniKhor = ['abul','kabul','babul','abul','sabul','kabul','abul'];
console.log(noDuplicate(biriyaniKhor));
const numbers = [1,5,61,5,87,7,5,81,61];
console.log(noDuplicate(numbers));
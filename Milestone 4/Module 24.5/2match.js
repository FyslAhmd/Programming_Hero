const numbers = [45, 65, 23, 89, 18];

// for(let i = 0; i < numbers.length; i++) {
//     const number = numbers[i];
//     console.log(number);
// }

// for(const number of numbers) {
//     console.log(number);
// }

const products = [
    {name: 'laptop', price: 43000},
    {name: 'shirt', price: 500},
    {name: 'watch', price: 3680},
    {name: 'Phone', price: 55000},
    {name: 'pen', price: 20},
    {name: 'glass', price: 100},
    {name: 'phone', price: 5000},
    {name: 'mouse', price: 500},
    {name: 'phone', price: 5000}
]

// for(const product of products) {
//     console.log(product);
// }

function matchProducts(products, search) {
    const matched = [];
    for(const product of products) {
        if(product.name.toLowerCase().includes(search.toLowerCase())) {
            matched.push(product);
        }
    }
    return matched;
}

console.log(matchProducts(products, 'Phone'));
const numbers = [1, 2, 3, 4, 5, 6];

const newNumbers = numbers.map((value) => value + 1);
console.log(newNumbers);

const newNumber2 = numbers.map((value) => value * value);
console.log(newNumber2);

const products = [
  { id: 1, name: "iphone", color: "black", price: 1200, brand: "apple" },
  { id: 2, name: "xiaomi", color: "black", price: 1000, brand: "xiaomi" },
  { id: 3, name: "samsung", color: "green", price: 1500, brand: "samsung" },
];

products.forEach(product => {
    if(product.color === 'black') {
        console.log(product);
    }
})

const newProducts = products.filter(product => product.price > 1000);
console.log(newProducts);

const product = products.find(p => p.id===3);
console.log(product);
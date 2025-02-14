const prices = [20000,16000,50000,100000,12000,30000,35000];

function getMin(numbers) {
    let min = numbers[0];
    for(const number of numbers) {
        if(number < min) {
            min = number;
        }
    }
    return min;
}

const min = getMin(prices);
// console.log(min);

//another

const mobiles = [
    {name:'Samsung',price:20000,camera:'12MP',color:'black'},
    {name:'Xiaomi',price:18000,camera:'12MP',color:'black'},
    {name:'oppo',price:30000,camera:'12MP',color:'black'},
    {name:'Iphone',price:100000,camera:'12MP',color:'black'},
    {name:'walton',price:31000,camera:'12MP',color:'black'},
]

function getCheap(phones) {
    let cheap = phones[0];
    for(const phone of phones) {
        if(phone.price < cheap.price) {
            cheap = phone;
        }
    }
    return cheap;
}

const getCheapest = getCheap(mobiles);
console.log(getCheapest);
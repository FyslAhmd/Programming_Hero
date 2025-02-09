const computer = {
    brand: 'MSI',
    price: 55000,
    processor: 'Intel',
    SSD: '512GB'
}

const keys = Object.keys(computer);
console.log(keys);

const values = Object.values(computer);
console.log(values);

const University = {
    name: 'DIU',
    class: ['1st','3rd','5th','7th','Final'],
    events: ['Science Fair','Bijoy Dibosh','21st February'],
    unique: {
        color: 'Red Blue',
        result: {
            gpa: 5,
            merit: 'Top'
        }
    }
}

console.log(University);
console.log(University.unique.result.merit);
University.events[1] = '16th December';
console.log(University.events[1]);

delete University.unique;
console.log(University);
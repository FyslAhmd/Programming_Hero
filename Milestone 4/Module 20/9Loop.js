const mobile = {
    brand: 'Apple',
    price: 95000,
    color: 'Purple',
    camera: '12MP'
}

for(const prop in mobile) {
    console.log(prop,':',mobile[prop]);
}
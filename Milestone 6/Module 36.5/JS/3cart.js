const handleAddToCart = () => {
    const productName = document.getElementById('productName');
    const productQuantity = document.getElementById('productQuantity');
    const name = productName.value;
    const quantity = productQuantity.value;

    displayProduct(name, quantity);
    sameProduct(name, quantity);
    productName.value='';
    productQuantity.value='';
}

const displayProduct = (name, quantity) => {
    const productContainer = document.getElementById('productContainer');

    const li = document.createElement('li');
    li.innerText = `${name} -- ${quantity}`;
    productContainer.appendChild(li);
}

const getProduct = () => {
    let cart = {};
    const getProduct = localStorage.getItem('cart');
    if(getProduct) {
        cart = JSON.parse(getProduct);
    }
    return cart;
}

const displayProductLoad = () => {
    const cart = getProduct();
    for(const product in cart) {
        displayProduct(product, cart[product]);
    }
}
displayProductLoad();

const sameProduct = (productName, quantity) => {
    const cart = getProduct();
    cart[productName] = quantity;
    const dataCart = JSON.stringify(cart);
    localStorage.setItem('cart', dataCart);
}
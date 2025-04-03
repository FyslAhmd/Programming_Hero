const getItemFromLocal = () => {
    const storedcart = localStorage.getItem('cart');
    if(storedcart) {
        const newStoredCart = JSON.parse(storedcart);
        return newStoredCart;
    }
    return [];
}

const addItemToCart = (id) => {
    const cart = getItemFromLocal();
    cart.push(id);
    saveToLocalStorage(cart);
}

const saveToLocalStorage = (cart) => {
    const stringCart = JSON.stringify(cart);
    localStorage.setItem('cart',stringCart);
}

const removeFromLocalStorage = id => {
    const allItems = getItemFromLocal();
    const remainingItems = allItems.filter(sId => sId!==id);
    saveToLocalStorage(remainingItems);
}

export {getItemFromLocal, addItemToCart, removeFromLocalStorage}
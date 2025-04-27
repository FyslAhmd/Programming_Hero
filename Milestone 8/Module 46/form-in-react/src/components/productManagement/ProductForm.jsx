import React from 'react';

const ProductForm = ({handleAddProducts}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        const product = {
            name: name,
            price: price,
            quantity: quantity
        }
        handleAddProducts(product);
    }
    return (
        <div>
            <form className='space-y-4 m-10' onSubmit={handleSubmit}>
                <input className='border-2 rounded text-xl' type="text" name='name' placeholder='Product Name'/>
                <br />
                <input className='border-2 rounded text-xl' type="text" name='price' placeholder='Product Price'/>
                <br />
                <input className='border-2 rounded text-xl' type="text" name='quantity' placeholder='Product Quantity'/>
                <br />
                <input className='border-2 rounded text-xl' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ProductForm;
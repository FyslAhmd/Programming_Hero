import React from "react";

const ProductTable = ({ products }) => {
  console.log(products);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Product price</th>
            <th>Product Quantity</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;

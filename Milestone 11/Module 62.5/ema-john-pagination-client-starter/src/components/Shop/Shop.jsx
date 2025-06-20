import React, { useEffect, useState } from "react";
import {
  addToDb,
  deleteShoppingCart,
  getShoppingCart,
} from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
import { Link, useLoaderData } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const cart = useLoaderData();
  console.log(cart);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(0);
  const totalPages = Math.ceil(count / itemsPerPage);
  const pages = [];
  const storedCart = getShoppingCart();
  const cartIds = Object.keys(storedCart);

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }
  useEffect(() => {
    fetch("http://localhost:5000/productsCount")
      .then((res) => res.json())
      .then((data) => setCount(data.count));
  }, []);

  useEffect(() => {
    fetch(
      `http://localhost:5000/products?page=${
        currentPage - 1
      }&size=${itemsPerPage}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [currentPage, itemsPerPage]);

  // useEffect(() => {
  //   const savedCart = [];
  //   // step 1: get id of the addedProduct
  //   for (const id in storedCart) {
  //     // step 2: get product from products state by using id
  //     const addedProduct = products.find((product) => product._id === id);
  //     if (addedProduct) {
  //       // step 3: add quantity
  //       const quantity = storedCart[id];
  //       addedProduct.quantity = quantity;
  //       // step 4: add the added product to the saved cart
  //       savedCart.push(addedProduct);
  //     }
  //     // console.log('added Product', addedProduct)
  //   }
  //   // step 5: set the cart
  //   setCart(savedCart);
  // }, [products]);

  const handleAddToCart = (product) => {
    // cart.push(product); '
    let newCart = [];
    // const newCart = [...cart, product];
    // if product doesn't exist in the cart, then set quantity = 1
    // if exist update quantity by 1
    const exists = cart.find((pd) => pd._id === product._id);
    if (!exists) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      exists.quantity = exists.quantity + 1;
      const remaining = cart.filter((pd) => pd._id !== product._id);
      newCart = [...remaining, exists];
    }

    setCart(newCart);
    addToDb(product._id);
  };

  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  const handleItemsPerPage = (e) => {
    setCurrentPage(1);
    const val = parseInt(e.target.value);
    setItemsPerPage(val);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product._id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} handleClearCart={handleClearCart}>
          <Link className="proceed-link" to="/orders">
            <button className="btn-proceed">Review Order</button>
          </Link>
        </Cart>
      </div>
      <div className="pagination">
        <button onClick={handlePrevious}>Previous</button>
        {pages.map((page) => (
          <button
            className={currentPage === page ? "selected" : ""}
            onClick={() => setCurrentPage(page)}
            key={page}
          >
            {page}
          </button>
        ))}
        <button onClick={handleNext}>Next</button>
        <select
          defaultValue={itemsPerPage}
          onChange={handleItemsPerPage}
          name=""
          id=""
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
      </div>
    </div>
  );
};

export default Shop;

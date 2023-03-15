import React, { useState, useEffect } from 'react';
import ProductsList from '../components/ProductsList';
import commerce from '../lib/commerce';

// import Navbar  from "../components/Navbar";

function Home() {
  
  const fetchProducts = () => {
  commerce.products.list().then((products) => {
    setProducts(products.data);
  }).catch((error) => {
    console.log('There was an error fetching the products', error)
  });
}

  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts();
  }, []);


  return (
    <div className="Home">
  <ProductsList />

    </div>
  );
}

export default Home;
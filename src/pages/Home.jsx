// import React, { useState, useEffect } from 'react';
// import ProductsList from '../components/ProductsList';
// import commerce from '../lib/commerce';


// function Home() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchProducts();
//   }, []);


//   /**
//      * Fetch products data from Chec and stores in the products data object.
//      * https://commercejs.com/docs/sdk/products
//      */
//   const fetchProducts = () => {
//     commerce.products.list().then((products) => {
//       setProducts(products.data);
//     }).catch((error) => {
//       console.log('There was an error fetching the products', error)
//     });
//   }

//   if (loading) {
//     return <p>Loading...</p>;
//   }



//   return (
//     <div className="Home">
//       <ProductsList
//         products={products}
//       />
//     </div>
//   );
// }

// export default Home;

import React from 'react'

const Home = () => {
  return (
    <div>
      home
    </div>
  )
}

export default Home


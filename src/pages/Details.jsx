import React,{useState} from 'react';
// import { useLocation } from 'react-router-dom';
import DiscReview from "../components/DiscReview";
import ItemDetail from "../components/ItemDetail";
import RelatedProducts from "../components/RelatedProducts";

const Details = () => {


  return (
    <>
    <ItemDetail />

    <DiscReview/>

    <RelatedProducts />
  


    </>
  );
};

export default Details;

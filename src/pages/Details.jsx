import React,{useState,useEffect} from 'react';
// import { useLocation } from 'react-router-dom';
import DiscReview from "../components/DiscReview";
import ItemDetail from "../components/ItemDetail";
import RelatedProducts from "../components/RelatedProducts";

const Details = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <ItemDetail />

    <DiscReview/>

    <RelatedProducts />
  


    </>
  );
};

export default Details;

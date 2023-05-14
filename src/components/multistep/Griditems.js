


import React from 'react';

import '../../index.css';
import { BilingDetails } from '../BilingDetails.jsx';
import OrderTable from '../checkout/OrderTable.jsx';
import PaypalBtn from '../checkout/PaypalBtn';

export const Griditems = ({ item, onChange, answer }) => {


  switch (item.type) {

      case 'grid':
      return <OrderTable />;

      case 'billing form':
      return <BilingDetails />;
    
      case 'paypal':
      return  <PaypalBtn/> ;

      
    default:
      return null;
  }
};

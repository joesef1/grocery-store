import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../../index.css';

const PaypalBtn = () => {
    // //paypal
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
      return () => {
        setTimeout(() => {
          const paypalButton = document.querySelector("#paypal-button > div");
          if (paypalButton) {
            paypalButton.remove();
          }
        }, 100);
      };
    }, []);
    
  
  
      const checkoutprocess = location.state;
      const handleApprove = (data, actions) => {
        return actions.order.capture().then((details) => {
          console.log('Thank you for your order');
          navigate('/ThankYou');
        });
      };

    
    window.paypal.Buttons({
      createOrder: function(data, actions) {
        return actions.order.create({
          purchase_units: [{
            amount: {
              currency_code: 'USD',
              value: checkoutprocess,
            },
          }],
        });
      },
      onApprove: handleApprove,
    }).render('#paypal-button');
    
  
  return (
    <div className=''>
        <div>
          <h1 className="text-2xl text-left font-medium mb-6 mt-12">Payment</h1>
          <div className='border rounded-md h-[458px] p-10 z-0 mb-9'>
        <div className='flex justify-center items-center z-10 relative'   id="paypal-button"></div>
      </div>
        </div>
    </div>
  )
}

export default PaypalBtn



















































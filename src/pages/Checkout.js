

import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';


const Checkout = () => {
  const location = useLocation();



  useEffect(() => {
    const checkoutprocess = location.state;
  
    const handleApprove = (data, actions) => {
      return actions.order.capture().then((details) => {
        console.log("Thank you for your order");
        // alert("Thank you for your order, " + details.payer.name.given_name + "!");
      });
    };
  
    const paypalButton = window.paypal.Buttons({
      createOrder: function(data, actions) {
        return actions.order.create({
          purchase_units: [{
            amount: {
              currency_code: 'USD',
              value: checkoutprocess
            }
          }]
        });
      },
      onApprove: handleApprove
    });
  
    paypalButton.render("#paypal-button");
  
    // Clean up previous button instance
    return () => paypalButton.close();
  }, [location.state]);

  



  return (
    <div>


<div id='paypal-button'></div>

    </div>
  )
}

export default Checkout;






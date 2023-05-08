  import React, { useEffect,useState } from 'react'
  import { useLocation } from 'react-router-dom';
  import { useSelector, useDispatch } from 'react-redux';
  import { Link, useNavigate  } from 'react-router-dom';
  import Pagebanner from '../Pagebanner.jsx'
  import shop from '../../assets/images/Grocery-1-1.jpg'
  import {clear} from '../../store/cartSlice';
  import '../../index.css'
  import { BilingDetails } from "../BilingDetails.jsx";
  import  OrderTable  from "../checkout/OrderTable.jsx";


export const Griditems = ({ item, onChange, answer }) => {
  const location = useLocation();
const navigate = useNavigate();
const dispatch = useDispatch();
  const [currentValue, setCurrentValue] = useState(answer || null);

  
  //paypal
  const checkoutprocess = location.state;

  const [paypalstate, setPaypalstate] = useState(false);

  useEffect(() => {
    setPaypalstate(true)
    const checkoutprocess = location.state;
    const handleApprove = (data, actions) => {
      return actions.order.capture().then((details) => {
        
        console.log("Thank you for your order");
        navigate('/ThankYou')
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
  }, []);

  
  const {cart} = useSelector(state => state.cart);

  const exploreShop = () => {
    console.log("asd");
    navigate('/Shop')
  }

  // ./paypal


  switch (item.type) {

    case 'grid':
      return (
        <> 
        <OrderTable/>
        </>
      )

      //.................................................

    case 'billing form':
      return (
        <>
      <BilingDetails/>
        </>
      )

      //.................................................
    case 'paypal':
      return (
        <p>
          {/* {item.label} */}
          <div className='mt-12'>
          <h1 className='text-2xl text-left  font-medium mb-6  '>Payment</h1>

          </div>  
                  {paypalstate &&
                      
                      <div className='border rounded-lg p-10 bg-[#F9FAFB] z-0 mb-12 mt-16 '>    
                          <div className='flex justify-center' id='paypal-button'></div>
                      </div> 
                        }
        </p>
      )
  

    default:
      return (
        <>
        </>
      )
  }
};

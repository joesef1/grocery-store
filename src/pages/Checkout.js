

import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate  } from 'react-router-dom';
import Pagebanner from '../components/Pagebanner'
import shop from '../assets/images/Grocery-1-1.jpg'
import {clear} from '../store/cartSlice';
import '../index.css'




const Checkout = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const location = useLocation();
const navigate = useNavigate();
  
const dispatch = useDispatch();


  const checkoutprocess = location.state;

  useEffect(() => {
    const checkoutprocess = location.state;
  
    const handleApprove = (data, actions) => {
      return actions.order.capture().then((details) => {
        
        console.log("Thank you for your order");
        navigate('/ThankYou')

        
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

  
  const {cart} = useSelector(state => state.cart);

  const exploreShop = () => {
    console.log("asd");
    navigate('/Shop')
  }



  return (
<>
<Pagebanner imgname={shop} pagename='Checkout' />
  
      <div className='flex flex-col w-[90%] mx-auto '>
  
      {cart.length !== 0 ?
      <>
        <div className='my-12'>
  

        <div className='flex justify-between'>
            <h1 className='text-2xl text-left mt-2 font-medium mb-6'>Your order</h1>
            <h1 
 onClick={()=> dispatch(clear())}
            className="border-[#e7e7e7] border hover:bg-[#424242]  bg-[#212121] cursor-pointer text-white ease-in duration-200  h-[35px] rounded items-center justify-center flex text-md  px-4 relative"
            >clear the cart</h1>
        </div>

        <div className='overflow-x-scroll'>
            <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400 '>
              <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                <tr>
                  <th scope='col' className='px-6 py-3'>
                    Product name
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Category
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Qty
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr key={item.id * index * index * 10000} className='bg-white border-b dark:bg-gray-900 dark:border-gray-700'>
                    <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                      {item.name}
                    </th>
                    <td className='px-6 py-4'>
                      {item.category}
                    </td>
                    <td className='px-6 py-4'>
                      {item.quantity}
                    </td>
                    <td className='px-6 py-4'>
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className='font-semibold text-gray-900 dark:text-white'>
                  <th scope='row' className='px-6 py-3 text-base'>Total</th>
                  <td></td>
                  <td className='px-6 py-3'>{cart.reduce((total, item) => total + item.quantity, 0)}</td>
                  <td className='px-6 py-3'>
                    ${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
                  </td>
                </tr>
              </tfoot>
            </table>
        </div>
        </div>
        <h1 className='text-2xl text-left mt-2 font-medium mb-6'>Billing details</h1>
      <div className='border rounded-lg p-10 bg-[#F9FAFB] z-0 mb-9'>
        <div className='flex justify-center' id='paypal-button'></div>
      </div>
        </>
        :
        
        <>
          <div className='w-[100%] mt-[10vh] m-auto flex justify-center flex-col items-center'>
            <img src='https://cartsy.redq.io/wp-content/themes/cartsy/assets/images/not-found-alt.svg' alt='' />
            <h1 className='text-black mt-7 font-bold text-xl'>No products in the cart.</h1>
          </div>
          <div className='flex justify-center  mb-32'>
            {/* <p>Continue shopping</p> */}
            <div onClick={()=> exploreShop()} className=' cursor-pointer hover:bg-[#353535] px-10 text-lg py-3 flex justify-center text-white items-center left-0 right-0  bg-[#212121] m-6 rounded-lg'>
  <div className='flex justify-center ><p '> <p> Continue shoping</p></div>
  </div>
          </div>
        </>
      }
    
      
    </div>
    
</>

    
  )
}

export default Checkout;






// email : sb-vymb625632648@personal.example.com
//pass : 2lD+pMX.




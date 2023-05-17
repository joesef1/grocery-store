// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { setordersumfunc  } from '../../store/orfferFormSlice';

// import { orderSummrize } from "../../firebase-config";
// import {
//   getDocs,
//   collection,
//   addDoc,
// } from "firebase/firestore";
// //

// import '../../index.css';

// const PaypalBtn = () => {
//   const dispatch = useDispatch();

//   const {ordersum,fullNameState , adressState ,emailState , phoneState,stateState ,apertState ,dateState,zipState } = useSelector(state => state.form);
// const {cart} = useSelector(state => state.cart);
// const {authuserid} = useSelector(state => state.user);


//   const [orderList, setOrderList] = useState([]);
//   const [ordersumstate, setOrdersumstate] = useState(ordersum);

// // for displaying data
// const commentsCollectionRef = collection(orderSummrize, "ordersummarize");

// const getorderList = async () => {
//   try {
//     const data = await getDocs(commentsCollectionRef);
//     const filteredReviewData = data.docs.map((doc) => ({
//       ...doc.data(),
//       id: doc.id,
//     }));

//     setOrderList(filteredReviewData);
//     setOrdersumstate(filteredReviewData);
//     dispatch(setordersumfunc(filteredReviewData)); // Dispatch the action to update the Redux store

//     // console.log(orderList);
//     // console.log(ordersumstate);
//   } catch (err) {
//     console.error(err);
//   }
// };


// // orderfunc()
// // function orderfunc() {
// //     dispatch(setordersumfunc(orderList)); // Dispatch the action to update the Redux store
// // }



//   useEffect(() => {
//     getorderList();
  

//   }, []);
//     // console.log(ordersum);
//   // for submit data
//     //submit


//     //
//     function generateUniqueId() {
//       const timestamp = Date.now().toString(36); // Convert current timestamp to base36 string
//       const randomString = Math.random().toString(36).substr(2, 5); // Generate a random string
//       const uniqueId = timestamp + randomString; // Concatenate timestamp and random string
//       return uniqueId;
//     }
//     const uniqueId = generateUniqueId();

//     //


//   const current = new Date();
// const time = current.toISOString().slice(0, 10); // "yyyy-mm-dd"
// const [newcommenttime, setIsNewcommenttime] = useState(time);

//     const onSubmitUserInfo = async () => {
//       try {
//         await addDoc(commentsCollectionRef, {
//           aderess: adressState,
//           birth: dateState,
//           fullname: fullNameState,
//           // note: cart.,
//           orderTotalPrice: cart.reduce((total, item) => total + item.price * item.quantity,  0),
//           orderTotalQuantity: cart.reduce((total, item) => total + item.quantity, 0),
//           phone: phoneState,
//           proCategory: cart.category,
//           proImg: cart.image,
//           proName: cart.name,
//           proPrice: cart.price,
//           proQuantity: cart.quantity,
//           // proTotalQuantity: cart.,
//           emailState: emailState,
//           state: stateState,
//           apert: apertState,
//           zip: zipState,
//           date: newcommenttime,
//           userid:authuserid,
//           orderid: uniqueId,

  
//         });
//         await getorderList();
//       } catch (err) {
//         console.error(err);
//       }
//     };


//     // //paypal
//     const location = useLocation();
//     const navigate = useNavigate();

//     useEffect(() => {
//       return () => {
//         setTimeout(() => {
//           const paypalButton = document.querySelector("#paypal-button > div");
//           if (paypalButton) {
//             paypalButton.remove();
//           }
//         }, 100);
//       };
      
//     }, []);
  
  
//       const checkoutprocess = location.state;
//       const handleApprove = (data, actions) => {
//         return actions.order.capture().then((details) => {
//           console.log('Thank you for your order');
//           navigate('/ThankYou');
// // console.log(orderList);
        
//           onSubmitUserInfo()
//         });
//       };
    
//     window.paypal.Buttons({
//       createOrder: function(data, actions) {
//         return actions.order.create({
//           purchase_units: [{
//             amount: {
//               currency_code: 'USD',
//               value: checkoutprocess,
//             },
//           }],
//         });
//       },
//       onApprove: handleApprove,
//     }).render('#paypal-button');
    
  
//   return (
//     <>
//       <div className=''>
//           <div>
//             <h1 className="text-2xl text-left font-medium mb-6 mt-12">Payment</h1>
//             <div className='border rounded-md h-[458px] p-10 z-0 mb-9'>
//           <div className='flex justify-center items-center z-10 relative'   id="paypal-button"></div>
//         </div>
//           </div>

//       </div>
//     </>

//   )
// }

// export default PaypalBtn







import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setordersumfunc  } from '../../store/orfferFormSlice';

import { orderSummrize } from "../../firebase-config";
import {
  getDocs,
  collection,
  addDoc,
} from "firebase/firestore";
//

import '../../index.css'; 

const PaypalBtn = () => {
  const dispatch = useDispatch();

  const {ordersum,fullNameState , adressState ,emailState , phoneState,stateState ,apertState ,dateState,zipState } = useSelector(state => state.form);
// const {cart} = useSelector(state => state.cart);
const {authuserid} = useSelector(state => state.user);


  const [orderList, setOrderList] = useState([]);
  const [ordersumstate, setOrdersumstate] = useState(ordersum);

// for displaying data
const commentsCollectionRef = collection(orderSummrize, "ordersummarize");

const getorderList = async () => {
  try {
    const data = await getDocs(commentsCollectionRef);
    const filteredReviewData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    setOrderList(filteredReviewData);
    setOrdersumstate(filteredReviewData);
    dispatch(setordersumfunc(filteredReviewData)); // Dispatch the action to update the Redux store

    // console.log(orderList);
    // console.log(ordersumstate);
  } catch (err) {
    console.error(err);
  }
};


// orderfunc()
// function orderfunc() {
//     dispatch(setordersumfunc(orderList)); // Dispatch the action to update the Redux store
// }



  useEffect(() => {
    getorderList();
  

  }, []);
    // console.log(ordersum);
  // for submit data
    //submit
  const current = new Date();
const time = current.toISOString().slice(0, 10); // "yyyy-mm-dd"
const [newcommenttime, setIsNewcommenttime] = useState(time);

  //
  function generateUniqueId() {
    const timestamp = Date.now().toString(36); // Convert current timestamp to base36 string
    const randomString = Math.random().toString(36).substr(2, 5); // Generate a random string
    const uniqueId = timestamp + randomString; // Concatenate timestamp and random string
    return uniqueId;
  }
  const uniqueId = generateUniqueId();
  //
const {cart} = useSelector(state => state.cart);

    const onSubmitUserInfo = async () => {
      try {
        await addDoc(commentsCollectionRef, {
          // aderess: adressState,
          // birth: dateState,
          // fullname: fullNameState,
          // // note: cart.,
          // // orderTotalPrice: cart.,
          // // orderTotalQuantity: cart.,
          // // proCategory: cart.,
          // // proImg: cart.,
          // // proName: cart.,
          // // proPrice: cart.,
          // // proQuantity: cart.,
          // // proTotalQuantity: cart.,
          // emailState: emailState,
          // state: stateState,
          // apert: apertState,
          // zip: zipState,
          // date: newcommenttime,
          // userid:authuserid

                    aderess: adressState,
                    birth: dateState,
                    fullname: fullNameState,
                       // note: cart.,
                    orderTotalPrice: cart.reduce((total, item) => total + item.price * item.quantity,  0),
                    orderTotalQuantity: cart.reduce((total, item) => total + item.quantity, 0),
                    arrcart: cart,
                    emailState: emailState,
                    state: stateState,
                    phone: phoneState,
                    apert: apertState,
                    zip: zipState,
                    date: newcommenttime,
                    userid:authuserid,
                    orderid: uniqueId,
                    proTotalQuantity: '',

  
        });
        await getorderList();
      } catch (err) {
        console.error(err);
      }
    };


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
// console.log(orderList);
        
          onSubmitUserInfo()
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
    <>
      <div className=''>
          <div>
            <h1 className="text-2xl text-left font-medium mb-6 mt-12">Payment</h1>
            <div className='border rounded-md h-[458px] p-10 z-0 mb-9'>
          <div className='flex justify-center items-center z-10 relative'   id="paypal-button"></div>
        </div>
          </div>

      </div>
    </>

  )
}

export default PaypalBtn
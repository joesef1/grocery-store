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
// // const {cart} = useSelector(state => state.cart);

//   const [orderList, setOrderList] = useState([]);
//   const [ordersumstate, setOrdersumstate] = useState(ordersum);

// /////////////////////////////////////////////////////////////////////////////////////  
// // for displaying data
// const commentsCollectionRef = collection(orderSummrize, "ordersummarize");

// // const getorderList = async () => {
// //   try {
// //     const data = await getDocs(commentsCollectionRef);
// //     const filteredReviewData = data.docs.map((doc) => ({
// //       ...doc.data(),
// //       id: doc.id,
// //     }));

// //     setOrderList(filteredReviewData);
// //     setOrdersumstate(filteredReviewData);
// //     dispatch(setordersumfunc(filteredReviewData)); // Dispatch the action to update the Redux store

// //     // console.log(orderList);
// //     // console.log(ordersumstate);
// //   } catch (err) {
// //     console.error(err);
// //   }
// // };



//   useEffect(() => {
//     setordersumfunc();
//   }, []);
  
//     // console.log(ordersum);
//   // for submit data
//     //submit
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
//           // orderTotalPrice: cart.,
//           // orderTotalQuantity: cart.,
//           // phone: phoneState,
//           // proCategory: cart.,
//           // proImg: cart.,
//           // proName: cart.,
//           // proPrice: cart.,
//           // proQuantity: cart.,
//           // proTotalQuantity: cart.,
//           emailState: emailState,
//           state: stateState,
//           apert: apertState,
//           zip: zipState,
//           date: newcommenttime,

  
//         });
//         await setordersumfunc();
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




































// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { setordersumfunc } from '../../store/orfferFormSlice';

// import { orderSummrize } from "../../firebase-config";
// import { collection, addDoc } from "firebase/firestore";

// import '../../index.css';

// const PaypalBtn = () => {
//   const dispatch = useDispatch();

//   const {ordersum , fullNameState, adressState, emailState, phoneState, stateState, apertState, dateState, zipState } = useSelector(state => state.form);

//   useEffect(() => {
//     dispatch(setordersumfunc());
//   }, []);

//   const current = new Date();
//   const time = current.toISOString().slice(0, 10); // "yyyy-mm-dd"
//   const [newcommenttime, setIsNewcommenttime] = useState(time);

//   const onSubmitUserInfo = async () => {
//     try {
//       const commentsCollectionRef = collection(orderSummrize, "ordersummarize");
//       await addDoc(commentsCollectionRef, {
//         aderess: adressState,
//         birth: dateState,
//         fullname: fullNameState,
//         emailState: emailState,
//         state: stateState,
//         apert: apertState,
//         zip: zipState,
//         date: newcommenttime,
//       });
//       dispatch(setordersumfunc());
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     return () => {
//       setTimeout(() => {
//         const paypalButton = document.querySelector("#paypal-button > div");
//         if (paypalButton) {
//           paypalButton.remove();
//         }
//       }, 100);
//     };
//   }, []);

//   const checkoutprocess = location.state;
//   const handleApprove = (data, actions) => {
//     return actions.order.capture().then((details) => {
//       console.log('Thank you for your order');
//       navigate('/ThankYou');
//       onSubmitUserInfo();
//     });
//   };

//   window.paypal.Buttons({
//     createOrder: function(data, actions) {
//       return actions.order.create({
//         purchase_units: [{
//           amount: {
//             currency_code: 'USD',
//             value: checkoutprocess,
//           },
//         }],
//       });
//     },
//     onApprove: handleApprove,
//   }).render('#paypal-button');

//   return (
//     <>
//       <div className=''>
//         <div>
//           <h1 className="text-2xl text-left font-medium mb-6 mt-12">Payment</h1>
//           <div className='border rounded-md h-[458px] p-10 z-0 mb-9'>
//             <div className='flex justify-center items-center z-10 relative' id="paypal-button"></div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default PaypalBtn;









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
const {userid} = useSelector(state => state.user);


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

    const onSubmitUserInfo = async () => {
      try {
        await addDoc(commentsCollectionRef, {
          aderess: adressState,
          birth: dateState,
          fullname: fullNameState,
          // note: cart.,
          // orderTotalPrice: cart.,
          // orderTotalQuantity: cart.,
          // phone: phoneState,
          // proCategory: cart.,
          // proImg: cart.,
          // proName: cart.,
          // proPrice: cart.,
          // proQuantity: cart.,
          // proTotalQuantity: cart.,
          emailState: emailState,
          state: stateState,
          apert: apertState,
          zip: zipState,
          date: newcommenttime,
          userid:userid

  
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
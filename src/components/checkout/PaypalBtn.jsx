import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';




//
import { orderSummrize } from "../../firebase-config";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
//

import '../../index.css';

const PaypalBtn = () => {
  const {fullNameState , adressState ,emailState , phoneState,stateState ,apertState ,dateState,zipState } = useSelector(state => state.form);
  const [commentList, setCommentList] = useState([]);

// for displaying data
  const commentsCollectionRef = collection(orderSummrize, "ordersummarize");
  const getMovieList = async () => {
    try {
      const data = await getDocs(commentsCollectionRef);
      const filteredReviewData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setCommentList(filteredReviewData);

    } catch (err) {
      console.error(err);
    }
  };

  // for submit data
    //submit
    const onSubmitUserInfo = async () => {
      try {
        await addDoc(commentsCollectionRef, {
          // aderess: newcommentName,
          // birth: newcommenttext,
          // fullname: newcommenttime,
          // note: blog.id,
          // orderTotalPrice: blog.id,
          // orderTotalQuantity: blog.id,
          // phone: blog.id,
          // proCategory: blog.id,
          // proImg: blog.id,
          // proPrice: blog.id,
  
        });
        getMovieList();
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
          console.log(fullNameState);
          console.log(adressState);
          console.log(phoneState);
          console.log(emailState);
          console.log(dateState);
          console.log(apertState);
          console.log(stateState);
          console.log(zipState);

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



















































import React,{ useEffect } from 'react'
import {useNavigate  } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import notFound  from "../../assets/images/not-found.svg";



const OrderHistoryTable = ({useridorders}) => {
  const navigate = useNavigate();

  const navigateToOrderFunc = (theorderid) => {
    const targetorder = useridorders.find((order)=> order.orderid === theorderid)
  navigate('/OrderDetails', { state: targetorder });

  // console.log(targetorder);
  
    
  }
  // useEffect(() => {
    // console.log(useridorders.find((order)=> order.orderid === );

    //get the email of the user
    const {registEmail} = useSelector(state => state.user);

    const target = useridorders.filter((order)=> order.emailState === registEmail)
    // const target = useridorders
    // console.log(target)
    console.log(registEmail)
    // I can store the userid in the localStorage to be able to use it in filtering order history , and clear it after logout
    // or using user egmail instead of userid if I can not grab it , and add validation when I sign up , to not to dublicate the emails 
      // }, [useridorders]);







    //
    // function generateUniqueId() {
    //   const timestamp = Date.now().toString(36); // Convert current timestamp to base36 string
    //   const randomString = Math.random().toString(36).substr(2, 5); // Generate a random string
    //   const uniqueId = timestamp + randomString; // Concatenate timestamp and random string
    //   return uniqueId;
    // }
    // const uniqueId = generateUniqueId();

    // console.log(uniqueId);
    //
  return (
    <div className='mx-auto w-[90%]'>
    
<div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8 ">
                {/* <div className="align-middle rounded-tl-lg rounded-tr-lg inline-block w-full py-4 overflow-hidden bg-white shadow-lg px-12">
                    <div className="flex justify-between">
                        <div className="inline-flex border rounded w-7/12 px-2 lg:px-6 h-12 bg-transparent">
                            <div className="flex flex-wrap items-stretch w-full h-full mb-6 relative">
                                <div className="flex">
                                    <span className="flex items-center leading-normal bg-transparent rounded rounded-r-none border border-r-0 border-none lg:px-3 py-2 whitespace-no-wrap text-grey-dark text-sm">
                                        <svg width="18" height="18" className="w-4 lg:w-auto" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.11086 15.2217C12.0381 15.2217 15.2217 12.0381 15.2217 8.11086C15.2217 4.18364 12.0381 1 8.11086 1C4.18364 1 1 4.18364 1 8.11086C1 12.0381 4.18364 15.2217 8.11086 15.2217Z" stroke="#455A64" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M16.9993 16.9993L13.1328 13.1328" stroke="#455A64" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </span>
                                </div>
                                <input type="text" className="flex-shrink flex-grow flex-auto leading-normal tracking-wide w-px flex-1 border border-none border-l-0 rounded rounded-l-none px-3 relative focus:outline-none text-xxs lg:text-xs lg:text-base text-gray-500 font-thin" placeholder="Search"/>
                            </div>
                        </div>
                    </div>
                </div> */}
                <h1 className='my-8 text-2xl font-semibold'>your orders</h1>
                {/*  */}
                { useridorders.length !== 0 ?
                <div className="align-middle inline-block min-w-full shadow overflow-hidden border bg-white shadow-dashboard px-8 pt-3  rounded-lg mt-10 mb-[30%]">
                    <table className="min-w-full">
                        <thead>
                            <tr>
                                <th className="px-6 py-3 border-b-2 border-gray-100 text-left leading-4 text-[#212121] tracking-wider">ID</th>
                                <th className="px-6 py-3 border-b-2 border-gray-100 text-left text-sm leading-4 text-[#212121] tracking-wider">Created At</th>
                                <th className="px-6 py-3 border-b-2 border-gray-100 text-left text-sm leading-4 text-[#212121] tracking-wider">Email</th>
                                {/* <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-[#212121] tracking-wider">Phone</th> */}
                                <th className="px-6 py-3 border-b-2 border-gray-100 text-left text-sm leading-4 text-[#212121] tracking-wider">Total quantity</th>
                                <th className="px-6 py-3 border-b-2 border-gray-100 text-left text-sm leading-4 text-[#212121] tracking-wider">Total price</th>
                                {/* <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-[#212121] tracking-wider">Created At</th> */}
                                <th className="px-6 py-3 border-b-2 border-gray-100"></th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">





                            { useridorders.map((comment, index) => (
                                  <tr key={index * 3490 + comment}>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                        <div className="flex items-center">
                                            <div>
                                                <div className="text-sm leading-5 text-gray-800">#{comment.orderid}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                        <div className="text-sm leading-5 text-blue-900">{comment.date}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-200 text-sm leading-5">{comment.emailState}</td>
                                    {/* <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-200 text-sm leading-5">+2348106420637</td> */}
                                    {/* <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-200 text-sm leading-5">
                                        <span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                                        <span aria-hidden className="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
                                        <span className="relative text-xs">not active</span>
                                    </span>
                                    </td> */}
                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-blue-900 text-sm leading-5">{comment.orderTotalQuantity}</td>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-blue-900 text-sm leading-5">{(comment.orderTotalPrice).toFixed(2)}</td>
                                    <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5">
                                        <button 
                                        onClick={()=> navigateToOrderFunc(comment.orderid)}
                                        className="px-5 py-2 border-[#212121] border text-[#212121] rounded transition duration-300 hover:bg-[#212121] hover:text-white focus:outline-none">View Details</button>
                                    </td>
                          </tr>
                                ))
                                }  
                        


































                          {/* <tr>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                        <div className="flex items-center">
                                            <div>
                                                <div className="text-sm leading-5 text-gray-800">#1</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                        <div className="text-sm leading-5 text-blue-900">Damilare Anjorin</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-200 text-sm leading-5">damilareanjorin1@gmail.com</td>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-200 text-sm leading-5">+2348106420637</td>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-200 text-sm leading-5">
                                        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span aria-hidden className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                        <span className="relative text-xs">active</span>
                                    </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-blue-900 text-sm leading-5">September 12</td>
                                    <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5">
                                        <button className="px-5 py-2 border-[#212121] border text-[#212121] rounded transition duration-300 hover:bg-[#212121] hover:text-white focus:outline-none">View Details</button>
                                    </td>
                          </tr>
                          <tr>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                        <div className="flex items-center">
                                            <div>
                                                <div className="text-sm leading-5 text-gray-800">#1</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                        <div className="text-sm leading-5 text-blue-900">Damilare Anjorin</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-200 text-sm leading-5">damilareanjorin1@gmail.com</td>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-200 text-sm leading-5">+2348106420637</td>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-200 text-sm leading-5">
                                        <span className="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
                                        <span aria-hidden className="absolute inset-0 bg-orange-200 opacity-50 rounded-full"></span>
                                        <span className="relative text-xs">disabled</span>
                                    </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-blue-900 text-sm leading-5">September 12</td>
                                    <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5">
                                        <button className="px-5 py-2 border-[#212121] border text-[#212121] rounded transition duration-300 hover:bg-[#212121] hover:text-white focus:outline-none">View Details</button>
                                    </td>
                          </tr> */}
                        </tbody>
                    </table>
                  <div className="sm:flex-1 sm:flex sm:items-center sm:justify-between mt-4 work-sans">

        {/* <div>
            <p className="text-sm leading-5 text-blue-700">
                Showing
                <span className="font-medium">1</span>
                to
                <span className="font-medium">200</span>
                of
                <span className="font-medium">2000</span>
                results
            </p>
        </div> */}


        <div>
            {/* <nav className="relative z-0 inline-flex shadow-sm">
                <div	>
                    <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150" aria-label="Previous" v-on:click.prevent="changePage(pagination.current_page - 1)">
                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                    </a>
                </div>
                <div>
                    <a href="#" className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-blue-700 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-tertiary active:text-gray-700 transition ease-in-out duration-150 hover:bg-tertiary">
                        1
                    </a>
                  <a href="#" className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-blue-600 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-tertiary active:text-gray-700 transition ease-in-out duration-150 hover:bg-tertiary">
                        2
                    </a>
                   <a href="#" className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-blue-600 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-tertiary active:text-gray-700 transition ease-in-out duration-150 hover:bg-tertiary">
                        3
                    </a>
                </div>
                <div v-if="pagination.current_page < pagination.last_page">
                    <a href="#" className="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150" aria-label="Next">
                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                        </svg>
                    </a>
                </div>
            </nav> */}
        </div>
    </div>
                </div>
                :
                <>
                  <div>
      <div className='mt-[6%] flex justify-center items-center flex-col  mx-auto mb-[13%]'>
        
      <div>
      <img className='w-[80%] m-auto' src={notFound} alt="" />
      </div>
      
      <div>
      <h1 className='text-3xl font-semibold mt-14'> No orders Found :( </h1>
      </div>
      
      </div>
    </div> 
                </>}
                {/*  */}

            </div>
      
    </div>
  )
}

export default OrderHistoryTable
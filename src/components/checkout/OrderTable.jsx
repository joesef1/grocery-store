import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clear } from "../../store/cartSlice";

const OrderTable = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);

  return (
    <>
      <div 
      // className="mb-12 mt-16"
      class="w-full md:w-11/12 lg:w-10/12 sm:mx-auto rounded  mt-16 mb-12 mx-8"

      >
        <div className="flex justify-between">
          <h1 className="text-2xl text-left mt-2 font-medium mb-6">
            Your order
          </h1>
          <h1
            onClick={() => dispatch(clear())}
            className="border-[#e7e7e7] border hover:bg-[#424242]  bg-[#212121] cursor-pointer text-white ease-in duration-200  h-[35px] rounded items-center justify-center flex text-md  px-4 relative"
          >
            clear the cart
          </h1>
        </div>

        <div className=" mt-2 py-8 px-3 overflow-x-scroll rounded-md border border-gray-200">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Qty
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr
                  key={item.id * index * index * 10000}
                  className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.name}
                  </th>
                  <td className="px-6 py-4">{item.category}</td>
                  <td className="px-6 py-4">{item.quantity}</td>
                  <td className="px-6 py-4">
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="font-semibold text-gray-900 dark:text-white">
                <th scope="row" className="px-6 py-3 text-base">
                  Total
                </th>
                <td></td>
                <td className="px-6 py-3">
                  {cart.reduce((total, item) => total + item.quantity, 0)}
                </td>
                <td className="px-6 py-3">
                  $
                  {cart
                    .reduce(
                      (total, item) => total + item.price * item.quantity,
                      0
                    )
                    .toFixed(2)}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </>
  );
};

export default OrderTable;

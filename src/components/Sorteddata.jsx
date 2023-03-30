import React, {useState} from 'react'


const Sorteddata = ({Data,totalPosts}) => {
  
  const [sortingOrder, setSortingOrder] = useState('Defult');

  const sortedData = [...Data];

  if (sortingOrder === 'low-to-high') {
    sortedData.sort((a, b) => a.price - b.price);
  } else if (sortingOrder === 'high-to-low') {
    sortedData.sort((a, b) => b.price - a.price);
  } else if (sortingOrder === 'latest') {
    sortedData.sort((a, b) => b.id - a.id);
  }else if (sortingOrder === 'popularity') {
    sortedData.sort((a, b) => a.id - b.id);
  }

  return (
    <div className='w-[94%] mx-auto mb-6'>
      {/*  */}
          {/* sorting */}
          <div className='flex justify-between mx-auto w-[94%] mb-10'>
        <div>Showing 4 of {totalPosts} results</div>
        {/*  */}      
<select
  id="sort"
  className="appearance-none block w-32 bg-white border border-gray-300 rounded-md py-2 px-3 leading-tight focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-300 text-sm"
  value={sortingOrder}
  onChange={(e) => setSortingOrder(e.target.value)}
>
  <option value="Defult">Defult sorting</option>
  <option value="low-to-high">Low to High</option>
  <option value="high-to-low">High to Low</option>
  <option value="latest">Latest</option>
</select>

        {/*  */}
      </div>
      {/* sorting
  {/*  */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {sortedData.map((product) => (
        <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
          <img src={product.cover} alt='' className="w-full h-[176px] object-cover mb-4 bg-product.cover" />
          <p className="text-gray-700 font-medium mb-2"> ${product.price}</p>
          <p className="text-gray-500 text-sm mb-5">{product.name}</p>
  
          <div className='flex w-[100%] justify-center items-center m-0 p-0 h-[35px]'>
            <div className='w-[80%]'>
            <button className="bg-gray-100 w-[100%] h-[35px] flex rounded-l-md items-center justify-center flex text-md  px-4 relative">Add</button>
            </div>
            <div className='w-[20%]'>
            <button className='bg-gray-200 px-3 h-[35px] flex w-[100%] rounded-r-md justify-center text-2xl' >+</button>
            </div>
          </div>
          
        </div>
      ))}
    </div>


</div>
  )
}

export default Sorteddata

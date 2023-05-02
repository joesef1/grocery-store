import React from 'react'

const Comment = () => {
  return (
    <>
      <div className=" bg-[#F9FAFB] border border-gray-200 p-9 rounded-lg max-w-xl mb-10 mt-20">
    <h2 className="text-lg font-medium mb-2">Leave a comment</h2>
    <form>
        <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2"
            // htmlFor="name"
            >
                Name
            </label>
            <input 
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500"
                id="name" type="text" placeholder="Enter your name"/>
                  
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2"
            // htmlFor="comment"
            >
                Comment
            </label>
            <textarea rows="4"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500"
                id="comment" placeholder="Enter your comment"></textarea>
        </div>
        <div className="flex justify-end">
            <button
                className="bg-[#212121] hover:bg-[#363636] del text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button">Post Comment</button>
        </div>
    </form>
</div>
    </>
  )
}

export default Comment

import React from 'react'
import '../index.css'

export const BilingDetails = () => {
  return (
    <div>
      <div class=" grid ">
  <div 
  class="w-full md:w-11/12 lg:w-8/12 sm:mx-auto rounded border mt-12 mx-8"
  >
    <div class="bg-white p-10 shadow-sm">
      <h2 class="text-2xl font-bold text-gray-800 mb-8">Customer information</h2>
      <div class="leading-loose">
        <form class="">
          <p class="text-gray-800 font-medium">Customer information</p>
          <div class="relative h-10 input-component mb-5 empty sm:inline-block mt-2 sm:w-1/2 sm:pr-1">
            <input id="first" type="text" name="first" class="h-full w-full border-gray-300 px-2 transition-all hover:border-gray-500 focus:border-[#212121] 
              rounded-md focus:ring-0 group focus:outline-0 border text-sm" />
            <label for="first" class="absolute left-2 transition-all bg-white px-1 text-[#212121] text-xs top-0">
              Full Name
            </label>
          </div>
        
          <div class="relative h-10 input-component mb-5 empty sm:inline-block mt-2 sm:w-1/2 sm:pr-1">
            <input id="email" type="email" name="email" class="h-full w-full border-gray-300 px-2 transition-all hover:border-gray-500 focus:border-[#212121] 
              rounded-md focus:ring-0 group focus:outline-0 border text-sm" />
            <label for="email" class="absolute left-2 transition-all bg-white px-1 text-[#212121] text-xs top-0">
              Email Address
            </label>
          </div>
          <div class="relative h-10 input-component mb-5 empty sm:inline-block mt-2 sm:-mx-1 sm:pl-1 sm:w-1/2">
            <input id="phone" type="text" name="phone" class="h-full w-full border-gray-300 px-2 transition-all hover:border-gray-500 focus:border-[#212121] 
            rounded-md focus:ring-0 group focus:outline-0 border text-sm" />
            <label for="phone" class="absolute left-2 transition-all bg-white px-1 text-[#212121] text-xs top-0">
              Phone Number
            </label>
          </div>
          <div x-data x-init="flatpickr($refs.datetimewidget, {wrap: true, dateFormat: 'M j, Y'});"
            x-ref="datetimewidget"
            class="flatpickr relative h-10 input-component mb-5 empty sm:inline-block mt-2 sm:w-1/2 sm:pr-1">
            <input id="datetime" type="text" name="datetime" x-ref="datetime" data-input class="h-full w-full border-gray-300 px-2 transition-all hover:border-gray-500 focus:border-[#212121] 
              rounded-md focus:ring-0 group focus:outline-0 border text-sm" />
            <label for="datetime" class="absolute left-2 transition-all bg-white px-1 text-[#212121] text-xs top-0">
              Date of Birth
            </label>
          </div>
        
          <p class="text-gray-800 font-medium">Address</p>
          <div class="relative h-10 input-component mb-5 empty mt-2">
            <input id="address" type="text" name="address" class="h-full w-full border-gray-300 px-2 transition-all hover:border-gray-500 focus:border-[#212121] 
            rounded-md focus:ring-0 group focus:outline-0 border text-sm" />
            <label for="address" class="absolute left-2 transition-all bg-white px-1 text-[#212121] text-xs top-0">
              Street Address
            </label>
          </div>
          <div class="relative h-10 input-component mb-5 empty inline-block mt-2 w-1/4 pr-1">
            <input id="apertNumber" type="text" name="apertNumber" class="h-full w-full border-gray-300 px-2 transition-all hover:border-gray-500 focus:border-[#212121] 
              rounded-md focus:ring-0 group focus:outline-0 border text-sm" />
            <label for="apertNumber" class="absolute left-2 transition-all bg-white px-1 text-[#212121] text-xs top-0">
              Apert Num
            </label>
          </div>
          <div class="relative h-10 input-component mb-5 empty inline-block mt-2 -mx-1 pl-1 pr-1 w-1/4">
            <input id="zip" type="text" name="zip" class="h-full w-full border-gray-300 px-2 transition-all hover:border-gray-500 focus:border-[#212121] 
            rounded-md focus:ring-0 group focus:outline-0 border text-sm" />
            <label for="zip" class="absolute left-2 transition-all bg-white px-1 text-[#212121] text-xs top-0">
              ZIP Code
            </label>
          </div>
          <div class="relative h-10 input-component mb-5 empty inline-block mt-2 -mx-1 pl-1 w-1/2">
            <input id="state" type="text" name="state" class="h-full w-full border-gray-300 px-2 transition-all hover:border-gray-500
            focus:border-[#212121] rounded-md focus:ring-0 group focus:outline-0 border text-sm" />
            <label for="state" class="absolute left-2 transition-all bg-white px-1 text-[#212121] text-xs top-0">
              State
            </label>
          </div>
        
        </form>
      </div>
    </div>
  </div>
</div>
<div class="py-2 my-4"></div>
    </div>
  )
}

"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const sortedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(sortedCart)
  }, [])

  const removeItem = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    window.dispatchEvent(new Event('cart-updated'));
    toast.success('The Item Deleted Successfully')
  }
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-black text-2xl font-semibold mb-3">Shopping Cart</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {cart.length > 0 ? cart.map((ele, index) => (
            <div className="group relative" key={index}>
              <div className={'cursor-pointer'}>
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg rounded-b-none bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <Image src={`https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-0${index + 1}.jpg`} alt="Product image" className="h-full w-full object-cover object-center group-hover:opacity-75 rounded-none" width={800} height={800} loading={'lazy'} />
                </div>
                <div className={'group-hover:bg-[#111827] group-hover:text-white text-gray-700 rounded-lg rounded-t-none p-3'}>
                  <h3 className="pt-4 text-xl font-semibold">{ele.name}</h3>
                  <h3 className="mt-1 text-lg ">{ele.description}</h3>
                  <p className="mt-1 text-lg font-medium">${ele.price}</p>
                  <div className={''}>
                    <button onClick={() => removeItem(ele.id)} className="mt-3 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-md">
                      Remove
                    </button>
                  </div>
                </div>
              </div>

            </div>
          )) : <p>Your cart is empty.</p>}
        </div>
      </div>
    </div>
  )
}

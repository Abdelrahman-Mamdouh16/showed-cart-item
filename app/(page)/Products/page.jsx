"use client"
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

export default function Products() {
  const [data, setData] = useState([])
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("name");
  const [cart, setCart] = useState([]);

  const pathName = usePathname()

  const getData = async () => {
    try {
      const { data } = await axios.get('/data/items.json');
      if (data) {
        setData(data)
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData()
  }, [])

  const filteredData = data?.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    item.price >= minPrice && item.price <= maxPrice
  ).sort((a, b) => {
    if (sortOption === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortOption === "price") {
      return a.price - b.price;
    }
    return 0;
  });

  const addToCart = (item) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    
    window.dispatchEvent(new Event('cart-updated'));

    toast.success('The Item Add Successfully');
  }
  return (
    <>
      <div className="bg-white">
        <div className={`mx-auto max-w-2xl px-4  py-16 ${pathName === '/' ? 'sm:py-20' : 'sm:py-10'} sm:px-6  lg:max-w-7xl lg:px-8`}>
          <h2 className="text-black text-2xl font-semibold mb-3">Products</h2>

          <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
            <input
              type="text"
              placeholder="Search by product name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />

            <div className="flex flex-col sm:flex-row items-center mt-4 sm:mt-0">
              <label className="mr-2">Min Price: {minPrice}</label>
              <input
                type="range"
                min="0"
                max="100"
                value={minPrice}
                onChange={(e) => setMinPrice(Number(e.target.value))}
                className="mr-4"
              />
              <label className="mr-2">Max Price: {maxPrice}</label>
              <input
                type="range"
                min="0"
                max="100"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="mr-4"
              />
            </div>

            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="mt-4 sm:mt-0 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="name">Sort by Name</option>
              <option value="price">Sort by Price</option>
            </select>
          </div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {!data.length ? <h1>loading...</h1> : filteredData.length > 0 ? filteredData.map((ele, inx) => (
              <div className="group relative" key={inx}>
                <div className={'cursor-pointer'}>
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg rounded-b-none bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <Image src={`https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-0${inx + 1}.jpg`} alt="Product image" className="h-full w-full object-cover object-center group-hover:opacity-75 rounded-none" width={800} height={800} loading={'lazy'} />
                  </div>
                  <div className={'group-hover:bg-[#111827] group-hover:text-white text-gray-700 rounded-lg rounded-t-none p-3'}>
                    <h3 className="pt-4 text-xl font-semibold">{ele.name}</h3>
                    <h3 className="mt-1 text-lg ">{ele.description}</h3>
                    <p className="mt-1 text-lg font-medium">${ele.price}</p>
                    <div className={''}>
                      <button onClick={() => addToCart(ele)} className="btn transition  duration-1000 opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md  transform  -translate-x-0">
                        Add to Cart
                      </button>
                    </div>

                  </div>
                </div>

              </div>
            )) : <h1 className='my-3'>Filtered Data Not Found</h1>}
          </div>
        </div>
      </div>
    </>
  )
}

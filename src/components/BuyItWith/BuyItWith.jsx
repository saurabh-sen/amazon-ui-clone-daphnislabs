import React from 'react'
import buymen from "../../assets/buymen.jpg"

const BuyItWith = () => {
  return (
    <div className=' shadow-md BuyItWith flex flex-col gap-1 py-8 px-3'>
      <p className="heading text-2xl font-semibold mb-6">Buy It With</p>
      <div className="container flex gap-3 items-center">
        <img src={buymen} alt="buymen" />
        +
        <img src={buymen} alt="buymen" />
        +
        <img src={buymen} alt="buymen" />
        <div className="container flex flex-col">
          <p className="price text-sm"><span className='text-sm font-semibold'>Total Price:</span><span className=''>₹2,127.00</span></p>
          <button className='p-1 bg-[#ffa41c] w-max rounded-xl my-3'>Add all three to cart</button>
        </div>
      </div>
      <div className="text-sm flex gap-2">
        <input type="checkbox" checked name="check" id="check" />
        <p>This item: Van Heusen Men's Regular Fit Polo Shirt
          ₹489.00</p>
      </div>
      <div className="text-sm flex gap-2">
        <input type="checkbox" checked name="check" id="check" />
        <p className='text-[#007190]'>Van Heusen Athleisure Men Polo T-Shirt - Cotton Rich - Ultra Soft, Short Sleeve, Textured
          ₹949.00</p>
      </div>
      <div className="text-sm flex gap-2">
        <input type="checkbox" checked name="check" id="check" />
        <p className='text-[#007190]'>Van Heusen Athleisure Men's Solid Regular fit Polo
          ₹689.00</p>
      </div>
    </div>
  )
}

export default BuyItWith
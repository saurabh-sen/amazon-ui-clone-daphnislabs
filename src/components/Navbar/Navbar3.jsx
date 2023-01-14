import React from 'react'
import amazonfashion from "../../assets/amazon-fashion.png"
import sale1 from "../../assets/sale1.jpg"

const Navbar3 = () => {

    let ar = ["Women", "Men", "Kids", "Bags & Luggage", "Sportswear", "Sales & Deals"]

  return (
    <div className='Navbar3 flex justify-between px-4 border-b-2 border-gray-300'>
        <img className='w-40' src={amazonfashion} alt="fashion" />
        <p className=' flex flex-1 justify-evenly items-center'>
            {ar.map((i) => 
        <span className='text-xs' key={i}>{i}</span>)}
        </p>
        
        <img className='w-18' src={sale1} alt="fashion" />
    </div>
  )
}

export default Navbar3
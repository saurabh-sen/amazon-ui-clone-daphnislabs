import React from 'react'
import sale from "../../assets/sale.jpg"

const Navbar2 = () => {

    let arr = ["Amazon miniTV", "Best Sellers", " Mobiles", "Today's Deals", "Customer Service", "Electronics", "Prime", "Fashion", "Amazon Pay"]

  return (
    <div className='bg-[#232f3e] flex justify-between px-3 text-white items-center'>
        <div className="nav2__text flex gap-4 items-center">
            <p className="text__all flex">
                <span className="icon">
                <svg className='w-4' color='white' fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill='currentColor' d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
                    </svg>
                </span>
                <span className="text text-sm pl-2">All</span>
            </p>
            {arr.map((i) => <span key={i}>{i}</span>)}
        </div>
        <div className="nav2__sale">
            <img className='' src={sale} alt="sale" />
        </div>
    </div>
  )
}

export default Navbar2
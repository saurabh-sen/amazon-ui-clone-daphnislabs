import React from 'react'
import manu from "../../assets/manu.jpg"
import manu1 from "../../assets/manu1.jpg"
import manu2 from "../../assets/manu2.jpg"
import manu3 from "../../assets/manu3.jpg"

const FromManufactures = () => {
  return (
    <div className='FromManufactures py-8 p-3 '>
        <p className="heading text-2xl font-semibold">From the manufacturer</p>
        <div className="images__container flex flex-col gap-6 justify-center items-center p-8
        ">
            <img src={manu} alt="manu" />
            <img src={manu1} alt="manu" />
            <img src={manu2} alt="manu" />
            <img src={manu3} alt="manu" />
        </div>
    </div>
  )
}

export default FromManufactures
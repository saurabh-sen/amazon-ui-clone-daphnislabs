import React from 'react'
import men from "../../assets/men.jpg"
import header_men from "../../assets/header__left.jpg"
import offer from "../../assets/offer1.png"
import car from "../../assets/car.png"
import men1 from "../../assets/men1.jpg"
import pricemen from "../../assets/pricemen.png"

const Header = () => {

  return (
    <div className='Header relative flex h-[32rem] overflow-auto p-4'>
      <div className="Header__left sticky top-0 left-0 flex justify-around">
        <div className="left__left__col flex flex-col gap-2">
          <img className='w-12 border-[1px] rounded-md border-gray-300 p-2' src={men} alt="men" />
          <img className='w-12 border-[1px] rounded-md border-gray-300 p-2' src={men} alt="men" />
          <img className='w-12 border-[1px] rounded-md border-gray-300 p-2' src={men} alt="men" />
          <img className='w-12 border-[1px] rounded-md border-gray-300 p-2' src={men} alt="men" />
          <img className='w-12 border-[1px] rounded-md border-gray-300 p-2' src={men} alt="men" />
          <img className='w-12 border-[1px] rounded-md border-gray-300 p-2' src={men} alt="men" />
        </div>
        <div className="left__right__col w-[70%]">
          <img src={header_men} alt="header_men" />
        </div>
      </div>
      <div className="Header__right flex flex-row w-[94rem]">
        <div className="right__left__col  w-[80%] p-4">

          <div className="col1 flex flex-col border-b-2 border-gray-300">

            <p className='text-sm text-[#007190] font-semibold'>Visit the Van Heusen Store</p>
            <p className='text-xl font-semibold'>Van Heusen Men's Regular Fit Polo Shirt</p>
            <p className="stars">
              <span className="star">⭐⭐⭐⭐☆</span>
              <span className="count text-[#007190]">28,018 ratings</span>
            </p>
            <p className='text-[#007190]'>| 125 answered questions</p>

          </div>

          <div className="col2 flex flex-col border-b-2 border-gray-300 mt-3 pb-3">

            <div className="price flex gap-2 ">
              <span className="percentage text-[#d70c39] text-2xl">-56%</span>
              <p className="price flex items-center">
                <span className="price__icon">
                  <svg className='w-2' color='black' fill='black' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path fill='currentColor' d="M0 64C0 46.3 14.3 32 32 32H96h16H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H231.8c9.6 14.4 16.7 30.6 20.7 48H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H252.4c-13.2 58.3-61.9 103.2-122.2 110.9L274.6 422c14.4 10.3 17.7 30.3 7.4 44.6s-30.3 17.7-44.6 7.4L13.4 314C2.1 306-2.7 291.5 1.5 278.2S18.1 256 32 256h80c32.8 0 61-19.7 73.3-48H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H185.3C173 115.7 144.8 96 112 96H96 32C14.3 96 0 81.7 0 64z" /></svg>
                </span>
                <span className="price__text text-2xl">
                  489
                </span>
              </p>
            </div>

            <p className="mrp text-[#666969] text-xs">
              <span className="mrp__text">M.R.P.: </span>
              <span className="mrp__text line-through">₹1,099</span>
            </p>

            <p className="taxes text-sm ">Inclusive of all taxes</p>

          </div>

          <div className="col3 flex flex-col border-b-2 border-gray-300 mt-3 pb-6">
            <div className="offer flex flex-row gap-4 my-1 items-center">
              <img className='w-8' src={offer} alt="offer" />
              <span className='text-sm font-semibold'>Offers</span>
            </div>
            <div className="containers flex flex-row gap-1 ">
              <div className="partner__offers py-2 px-4 border-gray-300 border-2 shadow-md flex flex-col gap-2 rounded-md ">
                <span className="text-sm font-semibold">Partner Offers</span>
                <span className="text-sm ">Buy 2 Get 5% Off,</span>
                <span className="text-sm ">Buy 3 Get 10% Off</span>
                <span className="text-sm text-[#007190] font-semibold">View products</span>
                <span className="text-sm text-[#007190] font-semibold">2 offers &gt;</span>
              </div>

              <div className="bank___offers  py-2 px-4  border-gray-300 border-2 shadow-md flex flex-col gap-2 rounded-md ">
                <span className="text-sm font-semibold">Bank Offers</span>
                <span className="text-sm ">Upto ₹1,000.00</span>
                <span className="text-sm ">discount on SBI</span>
                <span className="text-sm ">Credit Cards</span>
                <span className="text-sm text-[#007190] font-semibold">View products</span>
                <span className="text-sm text-[#007190] font-semibold">3 offers &gt;</span>
              </div>
            </div>
          </div>

          <div className="col4 flex flex-row justify-evenly border-b-2 border-gray-300 mt-3 pb-6">

            <div className="free flex flex-col gap-2 my-2 items-center">
              <img className='w-10' src={car} alt="car" />
              <span className='text text-[#007190] text-xs text-center'>Free Delivery</span>
            </div>
            <div className="pay flex flex-col gap-2 my-2 items-center">
              <img className='w-10' src={car} alt="car" />
              <span className='text text-[#007190] text-xs text-center'>Pay on Delivery</span>
            </div>
            <div className="exchange flex flex-col gap-2 my-2 items-center">
              <img className='w-10' src={car} alt="car" />
              <span className='text text-[#007190] text-xs text-center'>30 days Return & Exchange</span>
            </div>
            <div className="delivery flex flex-col gap-2 my-2 items-center">
              <img className='w-10' src={car} alt="car" />
              <span className='text text-[#007190] text-xs text-center'>Amazon Delivery</span>
            </div>

          </div>

          <div className="col5 flex flex-col gap-3 border-b-2 border-gray-300 mt-3 pb-1">
            <p className="text flex gap-1 my-3 items-center"><span className='text-base'>Color: </span> <span className='text-sm font-semibold'>Black</span></p>

            <div className="images__containers  flex flex-wrap gap-2">

              {[...Array(15)].map((i, index) => <div key={index} className="container flex flex-col w-max items-center ">
                <div className="container p-2 border-[1px] border-gray-300 rounded-md ">
                  <img src={men1} alt="men1" />
                </div>
                <span className="price font-semibold">₹489.00</span>
              </div>)}


            </div>

            <button className="w-max p-2 rounded-md my-4 bg-[#f0f2f2] border-[1px] border-gray-300 text-sm">See all 18 options &gt;</button>
          </div>

          <div className="col6 flex flex-col gap-3 border-b-2 border-gray-300 mt-3 pb-3">
            <p className="text flex gap-1 my-3 items-center"><span className='text-base'>Size: </span> <span className='text-sm font-semibold'>M</span></p>

            <div className="size__container flex flex-wrap gap-3">
              {["S", "M", "L", "XL", "2XL"].map((i, id) => <p key={id} className="p-3 border-[1px] border-gray-300 rounded-md"><span className=' mr-16'>{i}</span></p>)}
            </div>
          </div>

          <div className="col7 flex flex-col gap-4 border-b-2 border-gray-300 mt-3 pb-4">
            <p className="heading flex gap-1 mb-6">
              <span className="font-semibold">Fit: </span>
              <span className="font-semibold text-[#007190]">True to size. </span>
              <span className="font-semibold text-[#007190]">Orderusual size. </span>
            </p>

            <div className="details flex flex-col gap-2">
              <span className='text-xs text-[#007190]'>Size Chart </span>
              <p className="text font-semibold text-sm">Product Details</p>
              <div className='flex flex-col gap-3'>

                <p className='flex justify-between'>
                  <span className="font-semibold text-sm">Material Composition</span>
                  <span className="desc text-sm font-semibold text-gray-400 text-center"> 60% Cotton, 40% Polyester</span>
                </p>
                <p className='flex justify-between'>
                  <span className="font-semibold text-sm">Style</span>
                  <span className="desc text-sm font-semibold text-gray-400 text-center"> Western</span>
                </p>
                <p className='flex justify-between'>
                  <span className="font-semibold text-sm">Neck Style</span>
                  <span className="desc text-sm font-semibold text-gray-400 text-center"> Polo</span>
                </p>
                <p className='flex justify-between'>
                  <span className="font-semibold text-sm">Pattern</span>
                  <span className="desc text-sm font-semibold text-gray-400 text-center">Solid</span>
                </p>
                <p className='flex justify-between'>
                  <span className="font-semibold text-sm"> Country of Origin</span>
                  <span className="desc text-sm font-semibold text-gray-400 text-center">India</span>
                </p>

              </div>

            </div>

          </div>

        </div>

        <div className="right__right__col m-2">

          <div className="right__col1 border-[1px] border-gray-300 rounded-md p-4">

            <p className="price flex items-center">
              <span className="price__icon">
                <svg className='w-2' color='black' fill='black' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                  <path fill='currentColor' d="M0 64C0 46.3 14.3 32 32 32H96h16H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H231.8c9.6 14.4 16.7 30.6 20.7 48H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H252.4c-13.2 58.3-61.9 103.2-122.2 110.9L274.6 422c14.4 10.3 17.7 30.3 7.4 44.6s-30.3 17.7-44.6 7.4L13.4 314C2.1 306-2.7 291.5 1.5 278.2S18.1 256 32 256h80c32.8 0 61-19.7 73.3-48H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H185.3C173 115.7 144.8 96 112 96H96 32C14.3 96 0 81.7 0 64z" /></svg>
              </span>
              <span className="price__text text-2xl">
                489
              </span>
            </p>

            <p className="desc flex flex-wrap gap-1 items-center text-sm">
              <span className="text-[#007190] font-semibold">FREE delivery. </span>
              <span className="font-semibold">Friday, 20 January </span>
              <span className="">on first order. Order within </span>
              <span className="text-[#007600]">1 hr 41 mins. </span>
              <span className="text-[#007190] font-semibold">Details </span>
            </p>

            <p className="location__div flex my-6 items-center">
              <span className="location">
                <svg className='w-3' color='black' fill='black' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path fill='currentColor' d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z" />
                </svg>
              </span>
              <span className="text text-[#007190] text-xs font-semibold ml-2">Select delivery location</span>
            </p>

            <div className="quantity__div">
              <span className="stock text-[#007600] font-semibold">
                In stock.
              </span>
              <p className="text flex flex-wrap gap-1 text-sm font-semibold">
                <span className="solv">Sold by </span>
                <span className="solv text-[#007190]">Cocoblu Retail</span>
                <span>and</span>
                <span className="solv text-[#007190]">Fulfilled by Amazon.</span>
              </p>
            </div>

            <p className="quantity flex my-4 flex-row items-center gap-2">
              <span className="text">Quantity: </span>
              <span className="py-1 px-2 border-gray-300 rounded-md border-[1px] flex">1 <svg className='w-2' color='black' fill='black' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path fill='currentColor' d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
              </svg></span>
            </p>

            <div className="buttons flex flex-col gap-3">
              <button className='w-full rounded-3xl  bg-[#ffd814] p-1 text-sm'>Add to Cart</button>
              <button className='w-full rounded-3xl bg-[#ffa41c] p-1 text-sm'>Buy Now</button>
            </div>
            <p className="secure flex items-center my-2">
              <span className="icon__lock">
                <svg className='w-3' color='gray' fill='gray' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path fill='currentColor' d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" /></svg>
              </span>
              <span className="text text-[#007190] ml-2">Secure transaction</span>
            </p>

            <p className='border-b-[1px] border-gray-300 mb-3'>
              <span className="checkbox">
                <input type="checkbox" name="check" id="check" />
              </span>
              <span className="text ml-2">
                Add gift options
              </span>
            </p>

            <button className='bg-[#eaecef] p-2 w-full border-gray-300 border-[1px] rounded-md text-sm text-left '>Add to Wish List</button>

          </div>

          <div className="right__col2 border-[1px] border-gray-300 rounded-md p-2 text-sm my-4">
            <p>New (2) from</p>
            <p className='flex gap-1'>
              <span className='text-[#d70c39] text-sm'>₹489.00</span>
              <span className="font-semibold">FREE Delivery</span>
              <span className="">on first order.</span>
            </p>
          </div>

          <div className="right__col3 border-[1px] border-gray-300 rounded-md p-2 text-sm my-4">
            <p className='border-b-[1px] border-gray-300 font-semibold'>Other Sellers on Amazon</p>
            <div className='flex gap-1 p-2'>
              <div className="text flex flex-col ">
                <span className='text-[#d70c39] text-base'>₹899.00</span>
                <span className="text-xs">+ ₹100.00 Delivery charge</span>
                <span className="text-sm">Sold by: MY CHOICE ECOM</span>

              </div>
              <button className="bg-[#ffd814] h-max py-1 px-2 rounded-3xl text-xs">Add to Cart</button>
            </div>
          </div>

          <div className="right__col4 flex flex-col items-center">
            <p className="text text-xs font-semibold">Have one to sell?</p>
            <button className='rounded-md border-[1px] border-gray-300 p-1 px-2 text-sm mb-3'>Sell on Amazon</button>

            <div className="w-full flex flex-col border-[1px] border-gray-300 rounded-md items-center"
            >
              <img className='w-20' src={pricemen} alt="redmen" />
              <p className="text text-sm font-semibold">Jockey Men's Regular Fit Half Sleeved Polo T-Shirt</p>
              <div className="container">
                <div className="container__box flex flex-row p-2 justify-between ">
                  <div className="stars">
                    <span className="stars">⭐⭐⭐⭐☆ 29</span>
                    <div className="container__rupee text-[#ae2e0e] flex items-center">
                    <svg className='w-2' color='#ae2e0e' fill='#ae2e0e' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                      <path fill='currentColor' d="M0 64C0 46.3 14.3 32 32 32H96h16H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H231.8c9.6 14.4 16.7 30.6 20.7 48H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H252.4c-13.2 58.3-61.9 103.2-122.2 110.9L274.6 422c14.4 10.3 17.7 30.3 7.4 44.6s-30.3 17.7-44.6 7.4L13.4 314C2.1 306-2.7 291.5 1.5 278.2S18.1 256 32 256h80c32.8 0 61-19.7 73.3-48H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H185.3C173 115.7 144.8 96 112 96H96 32C14.3 96 0 81.7 0 64z" /></svg> 1,199
                  </div>
                  <svg className='w-8' xmlns="http://www.w3.org/2000/svg" version="1.1" focusable="false" aria-hidden="true" viewBox="0 0 53 15" shapeRendering="geometricPrecision">
                    <path fill="rgb(34,146,192)" d="M11.933,4.04C11.933,3.896 11.966,3.794 12.027,3.738C12.089,3.681 12.187,3.652 12.323,3.652L13.441,3.652C13.679,3.652 13.825,3.767 13.876,3.994L13.985,4.398C14.296,4.097 14.671,3.859 15.112,3.683C15.552,3.507 16,3.419 16.456,3.419C17.46,3.419 18.256,3.787 18.841,4.523C19.427,5.257 19.72,6.253 19.72,7.506C19.72,8.366 19.575,9.117 19.284,9.759C18.995,10.402 18.601,10.896 18.103,11.243C17.606,11.591 17.036,11.764 16.394,11.764C15.968,11.764 15.565,11.697 15.181,11.562C14.798,11.427 14.472,11.241 14.202,11.003L14.202,14.406C14.202,14.55 14.173,14.652 14.118,14.708C14.06,14.765 13.959,14.794 13.814,14.794L12.323,14.794C12.187,14.794 12.089,14.765 12.027,14.708C11.966,14.652 11.933,14.55 11.933,14.406L11.933,4.04ZM48.66,8.345C48.069,8.345 47.557,8.289 47.122,8.174C47.184,8.869 47.393,9.365 47.751,9.666C48.108,9.967 48.649,10.117 49.375,10.117C49.665,10.117 49.947,10.099 50.221,10.062C50.496,10.026 50.877,9.946 51.364,9.822C51.395,9.811 51.426,9.803 51.457,9.799C51.488,9.793 51.514,9.791 51.535,9.791C51.711,9.791 51.799,9.91 51.799,10.148L51.799,10.863C51.799,11.029 51.776,11.145 51.729,11.213C51.682,11.279 51.592,11.34 51.457,11.391C50.7,11.681 49.897,11.826 49.048,11.826C47.764,11.826 46.776,11.474 46.088,10.769C45.399,10.065 45.055,9.055 45.055,7.739C45.055,6.393 45.407,5.336 46.112,4.569C46.815,3.803 47.795,3.419 49.048,3.419C50.012,3.419 50.766,3.652 51.309,4.118C51.854,4.584 52.125,5.206 52.125,5.983C52.125,6.76 51.833,7.348 51.247,7.746C50.662,8.146 49.799,8.345 48.66,8.345ZM27.451,4.041C27.451,3.896 27.482,3.795 27.544,3.738C27.607,3.681 27.705,3.652 27.839,3.652L29.331,3.652C29.476,3.652 29.577,3.681 29.634,3.738C29.691,3.795 29.72,3.896 29.72,4.041L29.72,11.204C29.72,11.339 29.691,11.437 29.634,11.5C29.577,11.562 29.476,11.593 29.331,11.593L27.839,11.593C27.705,11.593 27.607,11.562 27.544,11.5C27.482,11.437 27.451,11.339 27.451,11.204L27.451,4.041ZM33.71,4.413C34.259,4.05 34.754,3.794 35.194,3.644C35.634,3.494 36.087,3.419 36.554,3.419C37.487,3.419 38.144,3.751 38.528,4.413C39.056,4.062 39.554,3.808 40.02,3.652C40.486,3.496 40.968,3.419 41.465,3.419C42.19,3.419 42.753,3.621 43.151,4.025C43.55,4.429 43.749,4.994 43.749,5.718L43.749,11.204C43.749,11.339 43.72,11.438 43.663,11.499C43.607,11.562 43.505,11.593 43.36,11.593L41.868,11.593C41.734,11.593 41.636,11.562 41.573,11.499C41.511,11.438 41.48,11.339 41.48,11.204L41.48,6.216C41.48,5.511 41.165,5.159 40.532,5.159C39.973,5.159 39.408,5.294 38.839,5.564L38.839,11.204C38.839,11.339 38.81,11.438 38.753,11.499C38.696,11.562 38.595,11.593 38.45,11.593L36.958,11.593C36.823,11.593 36.725,11.562 36.663,11.499C36.601,11.438 36.57,11.339 36.57,11.204L36.57,6.216C36.57,5.511 36.253,5.159 35.622,5.159C35.042,5.159 34.472,5.3 33.912,5.579L33.912,11.204C33.912,11.339 33.884,11.438 33.827,11.499C33.769,11.562 33.669,11.593 33.523,11.593L32.032,11.593C31.898,11.593 31.798,11.562 31.736,11.499C31.675,11.438 31.644,11.339 31.644,11.204L31.644,4.04C31.644,3.896 31.675,3.794 31.736,3.738C31.798,3.681 31.898,3.652 32.032,3.652L33.15,3.652C33.39,3.652 33.534,3.767 33.586,3.994L33.71,4.413ZM23.385,4.833C23.799,4.378 24.19,4.054 24.559,3.862C24.926,3.671 25.317,3.574 25.732,3.574L25.95,3.574C26.094,3.574 26.198,3.603 26.26,3.659C26.323,3.716 26.354,3.818 26.354,3.962L26.354,5.268C26.354,5.403 26.325,5.501 26.268,5.563C26.211,5.626 26.11,5.657 25.965,5.657C25.893,5.657 25.799,5.651 25.686,5.641C25.571,5.631 25.426,5.626 25.25,5.626C25.012,5.626 24.721,5.659 24.38,5.727C24.038,5.794 23.748,5.88 23.51,5.983L23.51,11.204C23.51,11.339 23.481,11.438 23.424,11.499C23.367,11.562 23.266,11.593 23.121,11.593L21.629,11.593C21.495,11.593 21.396,11.562 21.334,11.499C21.272,11.438 21.241,11.339 21.241,11.204L21.241,4.04C21.241,3.896 21.272,3.794 21.334,3.737C21.396,3.681 21.495,3.652 21.629,3.652L22.748,3.652C22.987,3.652 23.131,3.766 23.184,3.993L23.385,4.833ZM15.726,5.128C15.187,5.128 14.679,5.269 14.202,5.548L14.202,9.634C14.659,9.915 15.166,10.054 15.726,10.054C16.306,10.054 16.733,9.858 17.007,9.464C17.282,9.071 17.419,8.449 17.419,7.599C17.419,6.739 17.284,6.113 17.015,5.718C16.746,5.325 16.316,5.128 15.726,5.128ZM48.877,4.988C47.883,4.988 47.308,5.6 47.153,6.822C47.567,6.905 48.028,6.947 48.536,6.947C49.063,6.947 49.448,6.867 49.686,6.705C49.924,6.545 50.043,6.299 50.043,5.967C50.043,5.315 49.655,4.988 48.877,4.988ZM28.585,2.424C28.191,2.424 27.875,2.316 27.638,2.098C27.398,1.88 27.28,1.585 27.28,1.212C27.28,0.839 27.398,0.544 27.638,0.326C27.875,0.109 28.191,-0 28.585,-0C28.978,-0 29.295,0.109 29.533,0.326C29.771,0.544 29.89,0.839 29.89,1.212C29.89,1.585 29.771,1.88 29.533,2.098C29.295,2.316 28.978,2.424 28.585,2.424Z"
                    />
                    <path fill='rgb(247,152,28)' d="M10.993,3.644L9.117,3.644C9.021,3.644 8.751,3.605 8.679,3.775L4.477,10.532L2.581,8.13C2.53,8.052 2.443,8.005 2.35,8.005L0.279,8.005C0.172,8.005 0.075,8.065 0.028,8.16C-0.019,8.254 -0.007,8.368 0.057,8.452L4.418,13.881C4.471,13.95 4.553,13.99 4.64,13.99C4.645,13.99 4.648,13.99 4.652,13.989C4.744,13.985 4.827,13.936 4.875,13.858L11.125,4.175C11.378,3.827 11.095,3.644 10.993,3.644" />
                  </svg>
                  </div>
                  
                  <button className="text-sm p-2 h-max rounded-xl bg-[#ffa41c]">Show now</button>

                </div>
              </div>

            </div>

          </div>

          <div className="right__col5"></div>

        </div>

      </div>
    </div>
  )
}

export default Header
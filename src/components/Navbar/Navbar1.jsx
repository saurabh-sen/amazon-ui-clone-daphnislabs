import React from 'react'
import logo from '../../assets/amazon-dark-logo.png'
import india from "../../assets/india.png"

const Navbar1 = () => {
  return (
    <div className='navbar1 bg-[#1f1f1f] p-2 text-white flex flex-row gap-3 items-center'>

      <div className="navbar1__img">
        <img className='w-32' src={logo} alt="logo" />
      </div>

      <div className="navbar1__hello flex flex-row">
        <span className="hello__icon flex my-auto mx-1">
          <svg className='w-3' color='white' fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path fill='currentColor' d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z" />
          </svg>
        </span>
        <p className="hello__text flex flex-col">
          <span className='text__hello text-gray-400 text-xs'>Hello</span>
          <span className='text__hello text-white text-sm font-semibold'>Select your address</span>
        </p>
      </div>

      <div className="navbar1__search flex flex-row flex-1 mr-10 ml-8">
        <p className="search__dd bg-gray-200 hover:text-gray-400 flex flex-row p-3 rounded-tl-sm rounded-bl-sm items-center gap-2">
          <span className="dd__text text-sm text-gray-400 hover:text-gray-600 ">All</span>
          <span className="dd__text text-sm text-gray-400 hover:text-gray-600 ">
            <svg className='w-2' color='black' fill='black' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
            </svg>
          </span>
        </p>
        <input className='text-black flex-1 p-2' type="search" value="men+t+shirt" />
        <p className="search__icon bg-[#febd69] flex justify-center items-center p-3 rounded-r-sm rounded-br-sm">
          <svg className='w-6' color='black' fill='black' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
          </svg>
        </p>
      </div>

      <div className="navbar1__language flex flex-row">
        <img src={india} className="language__india w-6" />
        <span className="language__en text-sm p-2">EN</span>
        <span className="language__en flex ">
          <svg className='w-2' color='gray' fill='gray' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path fill='currentColor' d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
          </svg>
        </span>
      </div>

      <div className="navbar1__account">
        <p className="account__signin text-xs">Hello, sign in</p>
        <p className="account__signin text-sm font-semibold flex gap-1">Account & Lists <svg className='w-2' color='gray' fill='gray' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path fill='currentColor' d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
        </svg>
        </p>
      </div>

      <div className="navbar1__return flex flex-col">
        <span className='return__return text-xs'>Returns</span>
        <span className='return__orders font-semibold'>& Orders</span>
      </div>

      <div className="navbar1__cart flex items-center">
        <span className='cart__icon'>
          <svg className='w-8' color='white' fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path fill='currentColor' d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48H69.5c3.8 0 7.1 2.7 7.9 6.5l51.6 271c6.5 34 36.2 58.5 70.7 58.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H199.7c-11.5 0-21.4-8.2-23.6-19.5L170.7 288H459.2c32.6 0 61.1-21.8 69.5-53.3l41-152.3C576.6 57 557.4 32 531.1 32H360V134.1l23-23c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-64 64c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l23 23V32H120.1C111 12.8 91.6 0 69.5 0H24zM176 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm336-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" />
          </svg>
        </span>
        <span className="cart__text font-semibold">Cart</span>
      </div>
    </div>
  )
}

export default Navbar1
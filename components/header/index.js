import React from 'react'
import Style from "./style.module.css"
import Link from 'next/link'
import { FaSearch } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';





function Header() {
  return (
    <div className={`${Style.navBar} p-4 `}>
      <div  className='d-flex align-items-center w-100 e justify-content-between'>
            <button className="navbar-toggler borderColor rounded-lg d-block d-md-none"type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                <div className={`${Style.addCart}  `}>
                  <FaBars />
                </div>
            </button>
            <div className='d-flex  justify-contenet-center  '>
              <Link className='d-flex  px-md-3 justify-content-lg-start align-items-center align-items-md-center' href="/">
                  <div className={`${Style.logo} borderColor `}>
                    <svg xmlns="http://www.w3.org/2000/svg" aria-label="Acme Store logo" viewBox="0 0 32 28" >
                      <path d="M21.5758 9.75769L16 0L0 28H11.6255L21.5758 9.75769Z"></path>
                      <path d="M26.2381 17.9167L20.7382 28H32L26.2381 17.9167Z"></path>
                    </svg>
                  </div>
                  <div className="ms-2 align-items-sm-center d-flex  d-lg-none d-xl-block  d-md-none fontSize-14 fw-medium text-uppercase textWhite">Acme Store</div>
              </Link>
            </div>
          <nav className='flex-item d-flex  navbar-expand-md'> 
            <div className="offcanvas d-flex flex-column flex-md-row  offcanvas-start  bg-black  " tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel"> 
              <div className="offcanvas-header  ">
                <button className='borderColor rounded-lg ' type="button" data-bs-dismiss="offcanvas" aria-label="Close"  >
                  <div className={`${Style.addCart}  `}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="h-6 transition-all ease-in-out hover:scale-110 ">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </div>
                </button>
              </div>
              <div className='d-flex flex-item  '>
                <ul className= "d-flex align-items-center text-small gap-4 ">
                  <li>
                    <Link  className={`${Style.content} textColor`} href={"/search"}>All</Link>
                  </li>
                  <li>
                    <Link className={`${Style.content} textColor`} href={"/search/shirts"}>Shirts </Link>
                  </li>
                  <li>
                    <Link className={`${Style.content} textColor`} href={"/search/stickers"}>Stickers</Link>
                  </li>
                </ul>
              </div> 
              <div className='justifay-content-center d-flex  flex-item flex-md-column  '>
                  <form className=" position-relative w-100  ">
                    <input  className={`${Style.inputSearch} py-2 px-4 text-small borderColor textWhite`} type="text" placeholder="Search for products..." name="search" />
                    <div className={`${Style.search}  h-100`}>
                      <FaSearch  className='textWhite ' />
                    </div>
                  </form>
              </div>
            </div>
          </nav>
        <div className='flex-item d-flex justify-content-end'>
          <button className='borderColor rounded-lg  ' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" >
            <div className={`${Style.addCart}  `}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="textWhite  ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path>
              </svg>
            </div>
          </button>
          <div className="offcanvas offcanvas-end bg-black borderColor text-white p-4" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header">
              <h5 className='font-weight-600 ' id="offcanvasRightLabel">My Cart</h5>
              <button className='borderColor rounded-lg  ' type="button" data-bs-dismiss="offcanvas" aria-label="Close"  >
                <div className={`${Style.addCart}  `}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="h-6 transition-all ease-in-out hover:scale-110 ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </div>
              </button>
            </div>
            <div className="mt-20 d-flex w-100 flex-column align-items-center justify-content-center overflow-hidden">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="height-16">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path>
              </svg>
              <p className="mt-4 text-center text-large font-weight-700" style={{fontSize:"1.5rem"}}>Your cart is empty.</p></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
import React from 'react'
import CheckoutLayout from '@/components/CheckoutLayout'
import Style from "./style.module.css"
import Link  from 'next/link'
import Image from 'next/image'
import { IoIosArrowForward } from 'react-icons/io';
import { FaSearch } from 'react-icons/fa'
import { FaShoppingCart } from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io'






function Checkout() {

  

  return (
    <div className={`${Style.checkoutSection} bg-black d-flex`}>
      <div className={`${Style.checkout} col-lg-7  col-12 p-5  border-r`} >
        <header className='p-3'>
          <div className=''>
              <Link href="#">
                <Image src={"/images/header.png"} width={50} height={50} />
              </Link>
          </div>
        </header>
        <div className={`${Style.checkout} w-100 col-12 d-block d-lg-none `} >
          <button  className='w-100 bg-neutral-900  p-3 borderColor'  type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="true" aria-controls="collapseExample">
              <div className='d-flex justify-content-between w-100'>
                <div>
                  <FaShoppingCart className={Style.shoppingCart} style={{fill:"blue", stroke:"blue"}} />
                  <span className='ms-2 ' style={{color:"blue"}}>Order summary</span>
                  <IoIosArrowDown style={{fill:"blue"}} />

                </div>
                <div className=''>
                  <p className='text-white font-weight-600 fs-17'>$15.00</p>
                </div>
              </div>
          </button>
          <div  className="collapse mt-3 p-3 border-b" id="collapseExample">
              <section className=' d-flex justify-content-between align-items-center  '>
                  <div className='position-relative'>
                      <div className='borderColor rounded-lg bg-neutral-900 '>
                          <picture>
                                <Image className='object-contain' src="/images/t-shirt-2.png" width={64} height={64} />
                          </picture>
                      </div>
                      <div className='position-relative'>
                          <div></div>
                      </div>
                  </div>
                  <div className=''>
                      <div>
                        <p>Acme Circles T-Shirt</p>
                        <p className='fs-12 textColor'>White / XS</p>
                      </div>
                  </div>
                  <div className=''>$15.00</div>
              </section >
              <section className='mt-5 '>
                  <div className='d-flex justify-content-between mt-1'>
                    <div>
                      <span>Subtotal</span>
                    </div>
                    <div>
                      <span>$15.00</span>
                    </div>
                  </div>
                  <div className='d-flex justify-content-between mt-1'>
                    <div>
                      <span>Shipping</span>
                    </div>
                    <div>
                      <span className='fs-12 textColor'>Calculated at next step</span>
                    </div>
                  </div>
                  <div className='d-flex justify-content-between mt-1'>
                    <div>
                      <span className='fs-17 font-weight-600'>Total</span>
                    </div>
                    <div className='d-flex' >
                      <span className='fs-12 textColor d-flex  align-items-center'>USD</span>
                      <span className='ms-2 fs-17 font-weight-600'>$15.00</span>
                    </div>
                  </div>
              </section>
          </div>
        </div>
        <div className='position-relative p-3'>
          <div className='d-flex' >
            <ul className='d-flex gap-2  '>
              <li>
                <span className='fs-12 font-weight-600 '>informtion</span>
                <span>
                  <IoIosArrowForward />
                </span>
              </li>
              <li>
                <span className='fs-12 textColor'>Shipping</span>
                <span>
                  <IoIosArrowForward />
                </span>
              </li>
              <li>
                <span className='fs-12 textColor'>Payment</span>
              </li>
            </ul>
          </div>
        </div>
        <div className='p-3 mt-2'>
            <h2 className='pb-2 fs-17 font-weight-600' >Contact</h2>
            <div>
                <input className='w-100 p-3 rounded-lg borderColor text-white' id="email" name="email" placeholder="Email or mobile phone number" type="text" inputmode="text" aria-labelledby="email-label" autocomplete="shipping email" autofocus="true" data-protected-input="true" className="" autocapitalize="off" />  
            </div>
            <div className='d-flex mt-2'>
              <div>
                <input  className="form-check-input bg-black borderColor " style={{height:"20px", width:"20px"}} type="checkbox" value="" id="flexCheckDefault" />
              </div>
              <label className="ms-2 pt-1">Email me with news and offers</label>
            </div>
        </div>
        <div>
          <div className='p-3'>
              <h2 className=" font-weight-600 fs-17 pb-2">Shipping address</h2>
              <div className=''>
                  {/* <label>Country/Region</label> */}
                  <select className='w-100 borderColor p-3 text-white rounded-lg' name="countryCode" id="Select16" required="" autocomplete="shipping country" className="select-style">
                    <option value="US">United States</option>
                  </select>
              </div>
          </div>
          <div className='d-flex gap-2 justify-content-center p-3'>
            <div className=' w-100'>
              <input className='w-100 borderColor p-3 text-white rounded-lg' id="TextField43" name="firstName" placeholder="First name (optional)" type="text" aria-required="false" aria-labelledby="TextField43-label" autocomplete="shipping given-name" data-protected-input="true" className="" />
            </div>
            <div className='w-100'>
                <input className='w-100 borderColor text-white p-3 rounded-lg' id="TextField44" name="lastName" placeholder="Last name" required="" type="text" aria-required="true" aria-labelledby="TextField44-label" autocomplete="shipping family-name" data-protected-input="true" className="" />
            </div>
          </div>
          <div className='p-3 position-relative'>
            <input  className="p-3 w-100 borderColor rounded-lg text-white" type="text" placeholder="Address" name="adress1" />
            <div className={`${Style.search}  h-100`}>
              <FaSearch  className='textWhite ' />
            </div>
          </div>
          <div className='p-3 d-flex gap-2 w-100' >
            <div className='w-100'>
              <input  className='w-100 p-3 borderColor text-white rounded-lg' id="TextField46" name="city" placeholder="City" />
            </div>
            <div className='w-100'>
                {/* <label>Country/Region</label> */}
                <select className='w-100 h-100 p-3 borderColor  text-white rounded-lg'  id="Select17" >
                  <option value="US">Alabama</option>
                </select>
            </div>
            <div className='w-100'>
              <input  className='w-100 p-3 borderColor rounded-lg text-white' id="TextField46" name="postaCode" placeholder="ZIP code" />
            </div>
          </div>
          <div className='ps-3 d-flex mt-2'>
              <div>
                <input  className="form-check-input bg-black borderColor " style={{height:"20px", width:"20px"}} type="checkbox" value="" id="flexCheckDefault" />
              </div>
              <label className="ms-2 pt-1">Save this information for next time</label>
            </div>
        </div>
        <div className='p-3'>
            <div className='d-flex justify-content-end'>
                <button className='bg-primary rounded-lg p-4 text-white' type="submit" >
                  <span >Continue to shipping</span>
                </button>
            </div>
        </div>
        <footer className='mt-2'>
          <div className='border-t p-3'>
            <span className='fontSize-14'>All rights reserved Dev Vercel Shop</span>
          </div>
        </footer>
      </div>
      <div className={`${Style.checkout} col-5  col-lg-none p-5`} >
          <div>
              <section className=' d-flex justify-content-between align-items-center  '>
                  <div className='position-relative'>
                      <div className='borderColor rounded-lg bg-neutral-900 '>
                          <picture>
                                <Image className='object-contain' src="/images/t-shirt-2.png" width={64} height={64} />
                          </picture>
                      </div>
                      <div className='position-relative'>
                          <div></div>
                      </div>
                  </div>
                  <div className=''>
                      <div>
                        <p>Acme Circles T-Shirt</p>
                        <p className='fs-12 textColor'>White / XS</p>
                      </div>
                  </div>
                  <div className=''>$15.00</div>
              </section >
              <section className='mt-5 '>
                  <div className='d-flex justify-content-between mt-1'>
                    <div>
                      <span>Subtotal</span>
                    </div>
                    <div>
                      <span>$15.00</span>
                    </div>
                  </div>
                  <div className='d-flex justify-content-between mt-1'>
                    <div>
                      <span>Shipping</span>
                    </div>
                    <div>
                      <span className='fs-12 textColor'>Calculated at next step</span>
                    </div>
                  </div>
                  <div className='d-flex justify-content-between mt-1'>
                    <div>
                      <span className='fs-17 font-weight-600'>Total</span>
                    </div>
                    <div className='d-flex' >
                      <span className='fs-12 textColor d-flex  align-items-center'>USD</span>
                      <span className='ms-2 fs-17 font-weight-600'>$15.00</span>
                    </div>
                  </div>
              </section>
          </div>
      </div>         
    </div>
     

    
    
    
    
  )
}

export default Checkout
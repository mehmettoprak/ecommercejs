

import React from 'react'


import Style from "./style.module.css"
import Link from 'next/link'

function Footer() {
  return (
    <footer className='pb-3'>
      <div className={`${Style.myCustomClass} p-4 flex-column  flex-md-row`}>
          <Link className='d-flex ' href="/">
              <div className={`${Style.logo} borderColor `}>
                <svg xmlns="http://www.w3.org/2000/svg" ariaLabel="Acme Store logo" viewBox="0 0 32 28" >
                  <path d="M21.5758 9.75769L16 0L0 28H11.6255L21.5758 9.75769Z"></path>
                  <path d="M26.2381 17.9167L20.7382 28H32L26.2381 17.9167Z"></path>
                </svg>
                
              </div>
              <div className="ms-2  p-2  fw-medium text-uppercase textWhite fontSize-14">Acme Store</div>
          </Link>
          <nav>
            <ul>
              <li>
                <a className={`${Style.footerContent} textColor p-2 fontSize-14 `} href="/">Home</a>
              </li>
              <li>
                <Link className={`${Style.footerContent} textColor p-2 `} href="/about">About</Link>
              </li>
              <li>
                <Link className={`${Style.footerContent} textColor p-2`} href="/terms-conditions">Terms &amp; Conditions</Link>
              </li>
              <li>
                <Link className={`${Style.footerContent} textColor p-2`} href="/shipping-return-policy">Shipping &amp; Return Policy</Link>
              </li>
              <li>
                <Link className={`${Style.footerContent} textColor p-2`} href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link className={`${Style.footerContent} textColor p-2`} href="/frequently-asked-questions">FAQ</Link>
              </li>
            </ul>
          </nav>
          <div className="d-flex  ms-md-auto ms-0">
            <a className="d-flex     bg-black rounded w-100 borderColor align-items-center justify-content-center    text-small " href="https://vercel.com/templates/next.js/nextjs-commerce">
              <span className="px-3">▲</span>
              <hr className={`${Style.verticaLine} borderColor`}   />
              <span className="px-3">Deploy</span>
            </a>
          </div>
      </div>
      <div className="border-t  py-3 text-small max-height-40">
        <div className="mx-auto d-flex w-100 flex-column flex-md-row     align-items-center gap-1 px-4 ">
          <p className='textColor'>© 2023 ACME, Inc. All rights reserved.<span className='mx-2 text-white'>|</span> </p>
          
          <p className='textColor'>Designed in California</p>
          <p className="d-flex  ms-0  ms-md-auto">
            <a href="https://vercel.com" className="">Crafted by ▲ Vercel</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
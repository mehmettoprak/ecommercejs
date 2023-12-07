import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Style from "../style.module.css"


function Shirts() {
  return (
    <div className='py-3'>
       <ul className="d-flex gap-4  flex-wrap justify-content-center"  >
          <li className=" position-relative  max-width-475  aspect-square  col-12 col-sm-6 col-md-3 ">
              <Link className="position-relative  h-100 w-100  " href="/product/acme-geometric-circles-t-shirt">
                  <div className={`${Style.imageContent}  d-flex h-100 w-100 aligns-items-center borderColor  justify-content-center rounded-lg bg-black`}>
                      <Image className=' object-contain' src="/images/t-shirt.png"  layout='fill' />
                      <div className=" px-2 pb-4 position-absolute bottom-0 strat-0 d-flex" >
                          <div className="d-flex borderColor align-items-center rounded-full bg-black font-weight-700 p-2">
                              <h3 className="px-3 flex-grow text-center text-sm  ">Acme Mug</h3>
                              <p className="flex-none text-sm bg-primary p-2 rounded-full  text-white">$12.00<span class="ms-1 ">USD</span></p>
                          </div>
                      </div>
                  </div>
              </Link>
          </li>
          <li className=" position-relative  max-width-475  aspect-square  col-12 col-sm-6 col-md-3 ">
              <Link className="position-relative  h-100 w-100  " href="/product/acme-geometric-circles-t-shirt">
                  <div className={`${Style.imageContent}  d-flex h-100 w-100 aligns-items-center borderColor  justify-content-center rounded-lg bg-black`}>
                      <Image className=' object-contain' src="/images/t-shirt-spiral-1.avif"  layout='fill' />
                      <div className=" px-2 pb-4 position-absolute bottom-0 strat-0 d-flex" >
                          <div className="d-flex borderColor align-items-center rounded-full bg-black font-weight-700 p-2">
                              <h3 className="px-3 flex-grow text-center text-sm  ">Acme Mug</h3>
                              <p className="flex-none text-sm bg-primary p-2 rounded-full  text-white">$12.00<span class="ms-1 ">USD</span></p>
                          </div>
                      </div>

                  </div>
              </Link>
          </li>
          <li className=" position-relative  max-width-475  aspect-square  col-12 col-sm-6 col-md-3 overflow-hidden">
              <Link className="position-relative  h-100 w-100  " href="/product/acme-geometric-circles-t-shirt">
                  <div className={`${Style.imageContent}  d-flex h-100 w-100 aligns-items-center borderColor overflow-hidden  justify-content-center rounded-lg bg-black`}>
                      <Image className=' object-contain' src="/images/t-shirt-color-black.avif"  layout='fill' />
                      <div className=" px-2 pb-4 position-absolute bottom-0 strat-0 d-flex" >
                          <div className="d-flex borderColor align-items-center rounded-full bg-black font-weight-700 p-2">
                              <h3 className="px-3 flex-grow text-center text-sm  ">Acme Mug</h3>
                              <p className="flex-none text-sm bg-primary p-2 rounded-full  text-white">$12.00<span class="ms-1 ">USD</span></p>
                          </div>
                      </div>
                  </div>
              </Link>
          </li>
        </ul>
    </div>
  )
}

export default Shirts
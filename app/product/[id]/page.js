
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'
import { FaArrowRight } from 'react-icons/fa'
import { FaPlus } from 'react-icons/fa'
import Style  from "./style.module.css" 
import Script from 'next/script'
import Head from 'next/head'



function page() {

   
      
   

  return (    
    <div className='px-2 mx-auto ' >
        <div className=' d-flex px-4 borderColor flex-column   flex-md-row rounded-lg bg-black p-12'>
            <div className='col-12 h-100 col-md-8 '>
                <div className='position-relative big-img  max-height-550 w-100 overflow-hidden aspect-square'>
                    <Image className='object-contain' src="/images/t-shirt.png"  layout='fill' /> 
                    <div className='d-flex position-absolute bottom-15  justify-content-center w-100' >
                        <div className=' mx-auto height-11 bg-neutral-900 d-flex align-items-center rounded-full '>
                            <Link className='px-4' href={"#"}>
                                <FaArrowLeft /> 
                            </Link>
                            <div className="mx-2 h-6 w-px width-1 height-6 bg-white"></div>
                            <Link className='px-4 ' href={"#"}>
                                <FaArrowRight /> 
                            </Link>

                        </div>
                    </div>     
                </div>
                <ul className='d-flex justify-content-center align-items-center my-4 gap-2 overflow-auto py-1'>
                    <li className='height-20 width-20'>
                        <Link className='h-100 w-100' href={"#"}>
                            <div className={`${Style.imageContent} d-flex h-100 w-100 align-items-center justify-contenet-center borderColor rounded-lg bg-black`}>
                                <Image  src="/images/t-shirt.png"  width="80" height="80" />
                            </div>
                        </Link>
                    </li>
                    <li className='height-20 width-20'>
                        <Link className='h-100 w-100' href={"#"}>
                            <div className={`${Style.imageContent} d-flex h-100 w-100 align-items-center justify-contenet-center borderColor rounded-lg bg-black`}>
                                <Image  src="/images/t-shirt-2.png"  width="80" height="80" />
                            </div>
                        </Link>
                    </li>
                    <li className='height-20 width-20'>
                        <Link className='h-100 w-100' href={"#"}>
                            <div className={`${Style.imageContent} d-flex h-100 w-100 align-items-center justify-contenet-center borderColor rounded-lg bg-black`}>
                                <Image  src="/images/t-shirt-circles-blue.png"  width="80" height="80" />
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className=' col-12 col-md-4'>
                <div class="mb-5 d-flex flex-column border-b pb-5 ">
                    <h1 className="mb-2 fs-1 ">Acme Circles T-Shirt</h1>
                    <div className="me-auto w-auto rounded-full  mt-2">
                        <p className="  bg-primary p-2 rounded-full font-weight-700 text-white">$20.00<span class="ms-1 ">USD</span></p>
                    </div>
                </div>
                <dl className='mb-5'>
                    <td className='text-uppercase font-weight-600 pb-3'>color</td>
                    <dd className='d-flex gap-3' >
                        <button className={`${Style.buttonContent} text-white py-1 px-2 min-width-48 bg-neutral-900 rounded-full borderColor font-weight-600`}>Black</button>
                        <button className={`${Style.buttonContent} text-white py-1 px-2 min-width-48 bg-neutral-900 rounded-full borderColor font-weight-600`}>White</button>
                        <button className={`${Style.buttonContent} text-white py-1 px-2 min-width-48 bg-neutral-900 rounded-full borderColor font-weight-600`}>Blue</button>    
                    </dd>
                </dl>
                <dl className='mt-3 mb-5'>
                    <td className='text-uppercase font-weight-600 pb-3'>size</td>
                    <dd className='d-flex gap-3 flex-wrap' >
                        <button className={`${Style.buttonContent} text-white py-1 px-2 min-width-67 bg-neutral-900 rounded-full borderColor font-weight-600`}>XS</button>
                        <button className={`${Style.buttonContent} text-white py-1 px-2 min-width-67 bg-neutral-900 rounded-full borderColor font-weight-600`}>S</button>
                        <button className={`${Style.buttonContent} text-white py-1 px-2 min-width-67 bg-neutral-900 rounded-full borderColor font-weight-600`}>M</button>
                        <button className={`${Style.buttonContent} text-white py-1 px-2 min-width-67 bg-neutral-900 rounded-full borderColor font-weight-600`}>L</button>
                        <button className={`${Style.buttonContent} text-white py-1 px-2 min-width-67 bg-neutral-900 rounded-full borderColor font-weight-600`}>XL</button>
                        <button className={`${Style.buttonContent} text-white py-1 px-2 min-width-67 bg-neutral-900 rounded-full borderColor font-weight-600`}>XXL</button>
                        <button className={`${Style.buttonContent} text-white py-1 px-2 min-width-67 bg-neutral-900 rounded-full borderColor font-weight-600`}>XXXL</button>                        
                    </dd>                   
                </dl>
                <div className='paleWhite mt-2'>60% combed ringspun cotton/40% polyester jersey tee.</div>
                <form className=' mt-3'>
                    <button className='p-3 fs-5 position-relative text-white rounded-full bg-primary d-flex align-items-center justify-content-center w-100'>
                        <div className='position-absolute start-0 ps-3'>
                            <FaPlus />  
                        </div>
                        Add To Cart
                    </button>
                </form>
            </div>
        </div>
        <div className='py-4'>
            <h2 class="mb-4 fs-3">Related Products</h2>
            <ul className={`${Style.mediaScroller} d-flex gap-4`} >
                <li className=" position-relative max-height-275 max-width-475  aspect-square  col-12 col-sm-6 col-md-3 ">
                    <Link className="position-relative  h-100 w-100  " href="/product/acme-geometric-circles-t-shirt">
                        <div className={`${Style.imageContent}  d-flex h-100 w-100 aligns-items-center borderColor  justify-content-center rounded-lg bg-black`}>
                            <Image className=' object-contain' src="/images/mug-1.png"  layout='fill' />
                            <div className=" px-2 pb-4 position-absolute bottom-0 strat-0 d-flex" >
                                <div className="d-flex borderColor align-items-center rounded-full bg-black font-weight-700 p-2">
                                    <h3 className="px-3 flex-grow text-center text-sm  ">Acme Mug</h3>
                                    <p className="flex-none text-sm bg-primary p-2 rounded-full  text-white">$12.00<span class="ms-1 ">USD</span></p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </li>
                <li className=" position-relative max-height-275 max-width-475  aspect-square col-12 col-sm-6 col-md-3 ">
                    <Link className="position-relative  h-100 w-100  " href="/product/acme-geometric-circles-t-shirt">
                        <div className={`${Style.imageContent}  d-flex h-100 w-100 aligns-items-center borderColor  justify-content-center rounded-lg bg-black`}>
                            <Image className=' object-contain' src="/images/mug-1.png"  layout='fill' />
                            <div className=" px-2 pb-4 position-absolute bottom-0 strat-0 d-flex" >
                                <div className="d-flex borderColor align-items-center rounded-full bg-black font-weight-700 p-2">
                                    <h3 className="px-3 flex-grow text-center text-sm  ">Acme Mug</h3>
                                    <p className="flex-none text-sm bg-primary p-2 rounded-full  text-white">$12.00<span class="ms-1 ">USD</span></p>
                                </div>
                            </div>

                        </div>
                    </Link>
                </li>
                <li className=" position-relative max-height-275 max-width-475  aspect-square col-12 col-sm-6 col-md-3 ">
                    <Link className="position-relative  h-100 w-100  " href="/product/acme-geometric-circles-t-shirt">
                        <div className={`${Style.imageContent}  d-flex h-100 w-100 aligns-items-center borderColor  justify-content-center rounded-lg bg-black`}>
                            <Image className=' object-contain' src="/images/mug-1.png"  layout='fill' />
                            <div className=" px-2 pb-4 position-absolute bottom-0 strat-0 d-flex" >
                                <div className="d-flex borderColor align-items-center rounded-full bg-black font-weight-700 p-2">
                                    <h3 className="px-3 flex-grow text-center text-sm  ">Acme Mug</h3>
                                    <p className="flex-none text-sm bg-primary p-2 rounded-full  text-white">$12.00<span class="ms-1 ">USD</span></p>
                                </div>
                            </div>

                        </div>
                    </Link>
                </li>
                <li className=" position-relative max-height-275 max-width-475  aspect-square col-12 col-sm-6 col-md-3">
                    <Link className="position-relative  h-100 w-100  " href="/product/acme-geometric-circles-t-shirt">
                        <div className={`${Style.imageContent}  d-flex h-100 w-100 aligns-items-center borderColor  justify-content-center rounded-lg bg-black`}>
                            <Image className=' object-contain' src="/images/mug-1.png"  layout='fill' />
                            <div className=" px-2 pb-4 position-absolute bottom-0 strat-0 d-flex" >
                                <div className="d-flex borderColor align-items-center rounded-full bg-black font-weight-700 p-2">
                                    <h3 className="px-3 flex-grow text-center text-sm  ">Acme Mug</h3>
                                    <p className="flex-none text-sm bg-primary p-2 rounded-full  text-white">$12.00<span class="ms-1 ">USD</span></p>
                                </div>
                            </div>

                        </div>
                    </Link>
                </li>
                <li className=" position-relative max-height-275 max-width-475  aspect-square col-12 col-sm-6 col-md-3 ">
                    <Link className="position-relative  h-100 w-100  " href="/product/acme-geometric-circles-t-shirt">
                        <div className={`${Style.imageContent}  d-flex h-100 w-100 aligns-items-center borderColor  justify-content-center rounded-lg bg-black`}>
                            <Image className=' object-contain' src="/images/mug-1.png"  layout='fill' />
                            <div className=" px-2 pb-4 position-absolute bottom-0 strat-0 d-flex" >
                                <div className="d-flex borderColor align-items-center rounded-full bg-black font-weight-700 p-2">
                                    <h3 className="px-3 flex-grow text-center text-sm  ">Acme Mug</h3>
                                    <p className="flex-none text-sm bg-primary p-2 rounded-full  text-white">$12.00<span class="ms-1 ">USD</span></p>
                                </div>
                            </div>

                        </div>
                    </Link>
                </li>
                <li className=" position-relative max-height-275 max-width-475  aspect-square col-12 col-sm-6 col-md-3 ">
                    <Link className="position-relative  h-100 w-100  " href="/product/acme-geometric-circles-t-shirt">
                        <div className={`${Style.imageContent}  d-flex h-100 w-100 aligns-items-center borderColor  justify-content-center rounded-lg bg-black`}>
                            <Image className=' object-contain' src="/images/mug-1.png"  layout='fill' />
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
    </div>
  )
}

export default page
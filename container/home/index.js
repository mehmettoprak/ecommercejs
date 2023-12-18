import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Style from "./style.module.css"

import getProducts from '@/app/libs/getProducts'

import homeList from '@/app/libs/homeList'



 async function HomeSection() {

    const data1 = await getProducts()

    const products =data1.products || [] ;
    

    const data2 = await homeList();
    const home_list = data2.home_list || [] ;

    
    

    

    
  return (
    <>
        <section className={`${Style.sectionContent} px-4 pb-4`}>
            {home_list.splice(0 , 1).map(item => {
            return(
            <div key={item.id}  className={`${Style.item1} `} >
                <Link className="position-relative d-block aspect-square h-100 w-100 " href={`/prduct`}>
                    <div className={`${Style.imageContent}  d-flex h-100 w-100 aligns-items-center borderColor  justify-content-center rounded-lg bg-black`}>
                        <Image className='object-contain'  src={item.product_image} fill  />
                        <div className={`${Style.content} bottom-30  px-20 pb-4 `}>
                            <div className="d-flex borderColor align-items-center rounded-full bg-black font-weight-700 p-2">
                                <h3 className="px-3 flex-grow text-center text-sm  ">{item.product_title}</h3>
                                <p className="flex-none text-sm bg-primary p-2 rounded-full  text-white">{item.price}<span className="ms-1 ">USD</span></p>
                            </div>
                        </div>

                    </div>
                </Link>
            </div>
                )
            })}
            {home_list.map(item => {
                return (
                <div key={item.id} className={`${Style.item2}  `} >               
                    <Link className="position-relative d-block aspect-square h-100 w-100 " href="/product/acme-drawstring-bag">
                        <div className={`${Style.imageContent}  d-flex h-100 w-100 aligns-items-center borderColor  justify-content-center rounded-lg bg-black`}>
                            <Image className='object-contain' src={item.product_image} fill/>
                            <div className={`${Style.content}  ps-3  pb-4 `}>
                                <div className="d-flex borderColor align-items-center bg-black rounded-full font-weight-700 p-2">
                                    <h3 className="px-3 flex-grow text-center text-sm  ">{item.product_title}</h3>
                                    <p className="flex-none text-sm bg-primary p-2 rounded-full  text-white">${item.price}<span className="ms-1">USD</span></p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                )
            })}
        </section>
         <div className={`${Style.mediaScroller} pb-4 w-100`}>
           <ul className= {`${Style.animateCarousel} d-flex gap-4 `}>
            {products.map(product => {
                return(
                <li key={product.id} className=" position-relative max-height-275 max-width-475 height-30 aspect-square col-6 col-md-4 ">
                    <Link className="position-relative  h-100 w-100  "  href={`/product/${product.id}`}>
                        <div className={`${Style.imageContent}  d-flex h-100 w-100 aligns-items-center borderColor  justify-content-center rounded-lg bg-black`}>
                            <Image className=' object-contain' src={product.product_image}  fill/>
                            <div className={`${Style.content} px-2 pb-4 `}>
                                <div className="d-flex borderColor align-items-center rounded-full bg-black font-weight-700 p-2">
                                    <h3 className="px-3 flex-grow text-center text-sm  ">{product.product_title}</h3>
                                    <p className="flex-none text-sm bg-primary p-2 rounded-full  text-white">{product.price}<span className="ms-1 ">USD</span></p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </li>
                )
            })} 
            </ul>
        </div> 
    </>
  )
}

export default HomeSection
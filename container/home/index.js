import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Style from "./style.module.css"


function HomeSection() {
  return (
    <>
        <section className={`${Style.sectionContent} px-4 pb-4`}>
            
            <div className={`${Style.item1} `} >
                <Link className="position-relative d-block aspect-square h-100 w-100  " href="/product/id">
                    <div class={`${Style.imageContent}  d-flex h-100 w-100 aligns-items-center borderColor  justify-content-center rounded-lg bg-black`}>
                        <Image className='object-contain' src="/images/t-shirt.png"  layout='fill' />
                        <div class={`${Style.content} bottom-30  px-20 pb-4 `}>
                            <div class="d-flex borderColor align-items-center rounded-full bg-black font-weight-700 p-2">
                                <h3 className="px-3 flex-grow text-center text-sm  ">Acme Drawstring Bag</h3>
                                <p class="flex-none text-sm bg-primary p-2 rounded-full  text-white">$12.00<span class="ms-1 ">USD</span></p>
                            </div>
                        </div>

                    </div>
                </Link>
            </div>
            <div className={`${Style.item2}  `} >
                
                <Link class="position-relative d-block aspect-square h-100 w-100 " href="/product/acme-drawstring-bag">
                    <div class={`${Style.imageContent}  d-flex h-100 w-100 aligns-items-center borderColor  justify-content-center rounded-lg bg-black`}>
                        <Image className='object-contain' src="/images/bag-1-dark.png"  layout='fill' />
                        <div class={`${Style.content}  ps-3  pb-4 `}>
                            <div class="d-flex borderColor align-items-center bg-black rounded-full font-weight-700 p-2">
                                <h3 className="px-3 flex-grow text-center text-sm  ">Acme Drawstring Bag</h3>
                                <p class="flex-none text-sm bg-primary p-2 rounded-full  text-white">$12.00<span class="ms-1">USD</span></p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            <div className={`${Style.item2}  `} >
                
                <a class="position-relative d-block aspect-square h-100 w-100 " href="/product/acme-drawstring-bag">
                    <div class={`${Style.imageContent} group d-flex h-100 w-100 aligns-items-center borderColor  justify-content-center rounded-lg bg-black`}>
                        <Image className=' object-contain' src="/images/cup-black.png"  layout='fill' />
                        <div class={`${Style.content}   ps-3 pb-4 `}>
                            <div class="d-flex borderColor align-items-center bg-black rounded-full font-weight-700 p-2">
                                <h3 className="px-3 flex-grow text-center text-sm  ">Acme Cup</h3>
                                <p class="flex-none text-sm bg-primary p-2 rounded-full  text-white">$12.00<span class="ms-1">USD</span></p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </section>
         <div className={`${Style.mediaScroller} pb-4 w-100`}>
           <ul class= {`${Style.animateCarousel} d-flex gap-4 `}>
                <li class=" position-relative max-height-275 max-width-475 height-30 aspect-square col-6 col-md-4 ">
                    <Link className="position-relative  h-100 w-100  " href="/product/acme-geometric-circles-t-shirt">
                        <div class={`${Style.imageContent}  d-flex h-100 w-100 aligns-items-center borderColor  justify-content-center rounded-lg bg-black`}>
                            <Image className=' object-contain' src="/images/mug-1.png"  layout='fill' />
                            <div class={`${Style.content} px-2 pb-4 `}>
                                <div class="d-flex borderColor align-items-center rounded-full bg-black font-weight-700 p-2">
                                    <h3 className="px-3 flex-grow text-center text-sm  ">Acme Mug</h3>
                                    <p class="flex-none text-sm bg-primary p-2 rounded-full  text-white">$12.00<span class="ms-1 ">USD</span></p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </li>
                <li class=" position-relative max-height-275 max-width-475 height-30 aspect-square col-6 col-md-4 ">
                    <Link className="position-relative  h-100 w-100  " href="/product/acme-geometric-circles-t-shirt">
                        <div class={`${Style.imageContent}  d-flex h-100 w-100 aligns-items-center borderColor  justify-content-center rounded-lg bg-black`}>
                            <Image className=' object-contain' src="/images/hoodie-1.avif"  layout='fill' />
                            <div class={`${Style.content}   px-2 pb-4 `}>
                                <div class="d-flex borderColor align-items-center rounded-full bg-black font-weight-700 p-2">
                                    <h3 className="px-3 flex-grow text-center text-sm  ">Acme Hoodie</h3>
                                    <p class="flex-none text-sm bg-primary p-2 rounded-full  text-white">$12.00<span class="ms-1 ">USD</span></p>
                                </div>
                            </div>

                        </div>
                    </Link>
                </li>
                <li class=" position-relative max-height-275 max-width-475 height-30 aspect-square col-6 col-md-4 ">
                    <Link className="position-relative  h-100 w-100  " href="/product/acme-geometric-circles-t-shirt">
                        <div class={`${Style.imageContent}  d-flex h-100 w-100 aligns-items-center borderColor  justify-content-center rounded-lg bg-black`}>
                            <Image className=' object-contain' src="/images/hoodie-1.avif"  layout='fill' />
                            <div class={`${Style.content}   px-2 pb-4 `}>
                                <div class="d-flex borderColor align-items-center rounded-full bg-black font-weight-700 p-2">
                                    <h3 className="px-3 flex-grow text-center text-sm  ">Acme Hoodie</h3>
                                    <p class="flex-none text-sm bg-primary p-2 rounded-full  text-white">$12.00<span class="ms-1 ">USD</span></p>
                                </div>
                            </div>

                        </div>
                    </Link>
                </li>
                <li class=" position-relative max-height-275 max-width-475 height-30 aspect-square col-6 col-md-4 ">
                    <Link className="position-relative  h-100 w-100  " href="/product/acme-geometric-circles-t-shirt">
                        <div class={`${Style.imageContent}  d-flex h-100 w-100 aligns-items-center borderColor  justify-content-center rounded-lg bg-black`}>
                            <Image className=' object-contain' src="/images/hoodie-1.avif"  layout='fill' />
                            <div class={`${Style.content}   px-2 pb-4 `}>
                                <div class="d-flex borderColor align-items-center rounded-full bg-black font-weight-700 p-2">
                                    <h3 className="px-3 flex-grow text-center text-sm  ">Acme Hoodie</h3>
                                    <p class="flex-none text-sm bg-primary p-2 rounded-full  text-white">$12.00<span class="ms-1 ">USD</span></p>
                                </div>
                            </div>

                        </div>
                    </Link>
                </li>
                <li class=" position-relative max-height-275 max-width-475 height-30 aspect-square col-6 col-md-4 ">
                    <Link className="position-relative  h-100 w-100  " href="/product/acme-geometric-circles-t-shirt">
                        <div class={`${Style.imageContent}  d-flex h-100 w-100 aligns-items-center borderColor  justify-content-center rounded-lg bg-black`}>
                            <Image className=' object-contain' src="/images/hoodie-1.avif"  layout='fill' />
                            <div class={`${Style.content}   px-2 pb-4 `}>
                                <div class="d-flex borderColor align-items-center rounded-full bg-black font-weight-700 p-2">
                                    <h3 className="px-3 flex-grow text-center text-sm  ">Acme Hoodie</h3>
                                    <p class="flex-none text-sm bg-primary p-2 rounded-full  text-white">$12.00<span class="ms-1 ">USD</span></p>
                                </div>
                            </div>

                        </div>
                    </Link>
                </li>
                <li class=" position-relative max-height-275 max-width-475 height-30 aspect-square col-6 col-md-4 ">
                    <Link className="position-relative  h-100 w-100  " href="/product/acme-geometric-circles-t-shirt">
                        <div class={`${Style.imageContent}  d-flex h-100 w-100 aligns-items-center borderColor  justify-content-center rounded-lg bg-black`}>
                            <Image className=' object-contain' src="/images/hoodie-1.avif"  layout='fill' />
                            <div class={`${Style.content}   px-2 pb-4 `}>
                                <div class="d-flex borderColor align-items-center rounded-full bg-black font-weight-700 p-2">
                                    <h3 className="px-3 flex-grow text-center text-sm  ">Acme Hoodie</h3>
                                    <p class="flex-none text-sm bg-primary p-2 rounded-full  text-white">$12.00<span class="ms-1 ">USD</span></p>
                                </div>
                            </div>

                        </div>
                    </Link>
                </li>
                <li class=" position-relative max-height-275 max-width-475 height-30 aspect-square col-6 col-md-4 ">
                    <Link className="position-relative  h-100 w-100  " href="/product/acme-geometric-circles-t-shirt">
                        <div class={`${Style.imageContent}  d-flex h-100 w-100 aligns-items-center borderColor  justify-content-center rounded-lg bg-black`}>
                            <Image className=' object-contain' src="/images/hoodie-1.avif"  layout='fill' />
                            <div class={`${Style.content}   px-2 pb-4 `}>
                                <div class="d-flex borderColor align-items-center rounded-full bg-black font-weight-700 p-2">
                                    <h3 className="px-3 flex-grow text-center text-sm  ">Acme Hoodie</h3>
                                    <p class="flex-none text-sm bg-primary p-2 rounded-full  text-white">$12.00<span class="ms-1 ">USD</span></p>
                                </div>
                            </div>

                        </div>
                    </Link>
                </li>
                <li class=" position-relative max-height-275 max-width-475 height-30 aspect-square col-6 col-md-4 ">
                    <Link className="position-relative  h-100 w-100  " href="/product/acme-geometric-circles-t-shirt">
                        <div class={`${Style.imageContent}  d-flex h-100 w-100 aligns-items-center borderColor  justify-content-center rounded-lg bg-black`}>
                            <Image className=' object-contain' src="/images/hoodie-1.avif"  layout='fill' />
                            <div class={`${Style.content}   px-2 pb-4 `}>
                                <div class="d-flex borderColor align-items-center rounded-full bg-black font-weight-700 p-2">
                                    <h3 className="px-3 flex-grow text-center text-sm  ">Acme Hoodie</h3>
                                    <p class="flex-none text-sm bg-primary p-2 rounded-full  text-white">$12.00<span class="ms-1 ">USD</span></p>
                                </div>
                            </div>

                        </div>
                    </Link>
                </li>
                <li class=" position-relative max-height-275 max-width-475 height-30 aspect-square col-6 col-md-4 ">
                    <Link className="position-relative  h-100 w-100  " href="/product/acme-geometric-circles-t-shirt">
                        <div class={`${Style.imageContent}  d-flex h-100 w-100 aligns-items-center borderColor  justify-content-center rounded-lg bg-black`}>
                            <Image className=' object-contain' src="/images/hoodie-1.avif"  layout='fill' />
                            <div class={`${Style.content}   px-2 pb-4 `}>
                                <div class="d-flex borderColor align-items-center rounded-full bg-black font-weight-700 p-2">
                                    <h3 className="px-3 flex-grow text-center text-sm  ">Acme Hoodie</h3>
                                    <p class="flex-none text-sm bg-primary p-2 rounded-full  text-white">$12.00<span class="ms-1 ">USD</span></p>
                                </div>
                            </div>

                        </div>
                    </Link>
                </li>
                <li class=" position-relative max-height-275 max-width-475 height-30 aspect-square col-6 col-md-4 ">
                    <Link className="position-relative  h-100 w-100  " href="/product/acme-geometric-circles-t-shirt">
                        <div class={`${Style.imageContent}  d-flex h-100 w-100 aligns-items-center borderColor  justify-content-center rounded-lg bg-black`}>
                            <Image className=' object-contain' src="/images/hoodie-1.avif"  layout='fill' />
                            <div class={`${Style.content}   px-2 pb-4 `}>
                                <div class="d-flex borderColor align-items-center rounded-full bg-black font-weight-700 p-2">
                                    <h3 className="px-3 flex-grow text-center text-sm  ">Acme Hoodie</h3>
                                    <p class="flex-none text-sm bg-primary p-2 rounded-full  text-white">$12.00<span class="ms-1 ">USD</span></p>
                                </div>
                            </div>

                        </div>
                    </Link>
                </li>
                <li class=" position-relative max-height-275 max-width-475 height-30 aspect-square col-6 col-md-4 ">
                    <Link className="position-relative  h-100 w-100  " href="/product/acme-geometric-circles-t-shirt">
                        <div class={`${Style.imageContent}  d-flex h-100 w-100 aligns-items-center borderColor  justify-content-center rounded-lg bg-black`}>
                            <Image className=' object-contain' src="/images/hoodie-1.avif"  layout='fill' />
                            <div class={`${Style.content}   px-2 pb-4 `}>
                                <div class="d-flex borderColor align-items-center rounded-full bg-black font-weight-700 p-2">
                                    <h3 className="px-3 flex-grow text-center text-sm  ">Acme Hoodie</h3>
                                    <p class="flex-none text-sm bg-primary p-2 rounded-full  text-white">$12.00<span class="ms-1 ">USD</span></p>
                                </div>
                            </div>

                        </div>
                    </Link>
                </li>
               
            </ul>
           
        </div> 
    </>
  )
}

export default HomeSection
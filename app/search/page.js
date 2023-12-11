import React from 'react'
import Style from "./style.module.css"
import Link from 'next/link'
import Image from 'next/image'

import getProducts from '../libs/getProducts'





 async function Search() {

  const data = await getProducts();

  const products = data.products || [];
  return (
    <div className='py-3'>
        <ul className="d-flex gap-4  flex-wrap justify-content-center"  >
          {products.map((product ) => {

            return (
            <li key={product.id} className="position-relative max-width-475 object-contain aspect-square col-12 col-sm-6 col-md-3">
              <Link className="position-relative h-100 w-100" href={`/product/${product.id}`}>
                <div className={`${Style.imageContent} overflow-hidden d-flex h-100 w-100 aligns-items-center borderColor justify-content-center  rounded-lg bg-black`}>
                  <Image className='object-contain' src={product.product_image}  fill/>
                  <div className="px-2 pb-4 position-absolute bottom-0 start-0 d-flex">
                    <div className="d-flex borderColor align-items-center rounded-full bg-black font-weight-700 p-2">
                      <h3 className="px-3 flex-grow text-center text-sm">{product.product_title}</h3>
                      <p className="flex-none text-sm bg-primary p-2 rounded-full text-white">
                            ${product.price}
                        <span className="ms-1">USD </span>
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
            )
          } )} 
        </ul>
    </div>
  )
}

export default Search
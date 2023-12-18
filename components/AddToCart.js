"use client"

import  { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import { addToCart } from '@/redux/slices/cartSlice'


function AddToCart({
    product,
    showQty = true,
    redirect =false,
    increasePerClick =false,
})
 {

    const dispatch = useDispatch()
    const {cartItems} = useSelector((state) => state.cart)
    const router =useRouter()

    const {qty, setQty} =useState(1)

    const addToCartHandler =() => {
        let newQty =qty

        if(increasePerClick){
            const existItem = cartItems.find((x) => x.id === product.id)
            if(existItem){
                if(existItem.qty + 1 <= product.countInStock){
                    newQty = existItem.qty +1
                }else {
                    alert("no more prduct exist")
                }
            }
        }
        dispatch(addToCart({...product ,qty :newQty}))

        if(redirect) router.push("/checkout")
    }
  return (
    <>
        <div>
        {product.countInStock > 0 ? (
            <form className=' mt-3'>
                <button onClick={addToCartHandler} className='p-3 fs-5 position-relative text-white rounded-full bg-primary d-flex align-items-center justify-content-center w-100'>
                    <div className='position-absolute start-0 ps-3'>
                        <FaPlus />  
                    </div>
                    Add To Cart
                </button>
            </form>
            
            ) : (
            <button disabled>Out of stock</button>
        )}
      </div>
    
   
    </>
  )
}

export default AddToCart
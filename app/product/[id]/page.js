
"use client"
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'
import { FaArrowRight } from 'react-icons/fa'

import Style  from "./style.module.css" 
import getProduct from '@/app/libs/getProduct'
import getProducts from '@/app/libs/getProducts'
import { useState, useEffect } from 'react';
import { FaTimes, FaMinus, FaPlus } from 'react-icons/fa';
import { useRouter } from 'next/navigation'

import CartPage from '@/components/cart'

 



 function PraductPage({params: {id}}) {

    
    
    
    const [cartItems, setCartItems] = useState([]);

    const [loading, setLoading] = useState(true);

    const [product, setProduct] = useState({});
    const [products, setProducts] = useState([]);

    // const [mainImage, setMainImage] = useState(product.product_image);
    
     
    // const handleThumbnailClick = (galleryImage) => {
    //   setMainImage(galleryImage);
    // };

    useEffect(() => {
      const fetchData = async () => {
        try {
          const product = await getProduct(id);
          setProduct(product)
  
          const data = await getProducts();
          const products= data.products || [];
          setProducts(products);
  
          
        } catch (error) {
          console.error('Error fetching data:', error);
        } 
        finally {
           setLoading(false);
        }
      };
      fetchData();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }
   
   
    
   
    const handleAddToCart = () => {
    
      try {
        
        const existingItem = cartItems.find((item) => item.id === product.id);
    
        if (existingItem) {
          const updatedCart = cartItems.map((item) =>
          item.id === product.id? { ...item, quantity: item.quantity + 1, price: item.price + product.price }: item );
          setCartItems(updatedCart);
        } else {
          setCartItems([...cartItems, { ...product, quantity: 1 ,price: product.price}]);
        }
        
        
      }
        catch (error) {
        console.error('Error adding to cart:', error);
      }  
    };

    
    const handleRemove = (itemId) => {
      const updatedCart = cartItems.filter((item) => item.id !== itemId);
      setCartItems(updatedCart);
    };

    const handleDecrease = (itemId) => {
      const updatedCart = cartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity - 1 ,price: item.price - product.price } : item
      );
      setCartItems(updatedCart.filter((item) => item.quantity > 0));
    };
  
    const handleIncrease = (itemId) => {
      const updatedCart = cartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 ,price: item.price + product.price } : item
      );
      setCartItems(updatedCart);
      
    };
    
      
    
    
   
    

  return (    
    <div className='px-2 mx-auto  ' >
        <div className=' d-flex px-4 borderColor flex-column   flex-md-row rounded-lg bg-black p-12'>
            <div className='col-12 h-100 col-md-8 '>
                <div className='position-relative big-img  max-height-550 w-100 overflow-hidden aspect-square'>
                    <Image className='object-contain' src={product.product_image} fill /> 
                    <div className='d-flex position-absolute bottom-15  justify-content-center w-100' >
                        <div className=' mx-auto height-11 bg-neutral-900 d-flex align-items-center rounded-full '>
                            <Link className='px-4' href={"#"}>
                                <FaArrowLeft /> 
                            </Link>
                            <div className="mx-2 h-6 w-px width-1 height-6 bg-white"></div>
                            <Link className='px-4 ' href={"#"} >
                                <FaArrowRight  /> 
                            </Link>

                        </div>
                    </div>     
                </div>
                <ul className='d-flex justify-content-center align-items-center my-4 gap-2 overflow-auto py-1'>
                    {product.product_gallery.map((gallery,index)=>(
                    <li key={index} className='height-20 width-20'>
                        <Link className='h-100 w-100' href={"#"}>
                            <div className={`${Style.imageContent} d-flex h-100 w-100 align-items-center justify-contenet-center borderColor rounded-lg bg-black`}>
                                <Image  src={gallery}  width="80" height="80"  />
                            </div>
                        </Link>
                    </li>
                    ))}                  
                </ul>
            </div>
            <div className=' col-12 col-md-4'>
                <div className="mb-5 d-flex flex-column border-b pb-5 ">
                    <h1 className="mb-2 fs-1 ">{product.product_title}</h1>
                    <div className="me-auto w-auto rounded-full  mt-2">
                        <p className="  bg-primary p-2 rounded-full font-weight-700 text-white">${product.price}<span className="ms-1 ">USD</span></p>
                    </div>
                </div>
                <dl className=''>
                    <td className='text-uppercase font-weight-600 mb-5 pb-3'>{product.colors_text}</td>
                    <td className='d-flex gap-3' >
                    {product.colors.map((color, index) => (
                        <button  key={index} className={`${Style.buttonContent} text-white py-1 px-2 min-width-48 bg-neutral-900 rounded-full borderColor font-weight-600`}>{color}</button>
                    ))}
                    </td>
                </dl>
                <dl className='mt-3'>
                    <td className='text-uppercase font-weight-600 pb-3 mb-5'>{product.sizes_text}</td>
                    <td className='d-flex gap-3 flex-wrap pb-3' >
                        {product.sizes.map((size, index) =>(
                        <button key={index} className={`${Style.buttonContent} text-white py-1 px-2 min-width-67 bg-neutral-900 rounded-full borderColor font-weight-600`}>{size}</button>
                        ))}                     
                    </td>                   
                </dl>
                <div className='paleWhite mt-2'>{product.body}</div>
                <form className=' mt-3'onSubmit={(e) => { e.preventDefault(); handleAddToCart(); }}>
                    <button type='submit' onClick={() => handleAddToCart} handleAddToCart ={handleAddToCart} className='p-3 fs-5 position-relative text-white rounded-full bg-primary d-flex align-items-center justify-content-center w-100'>
                        <div  className='position-absolute start-0 ps-3'>
                            <FaPlus />  
                        </div>
                        Add To Cart
                    </button>
                </form>  
            </div>
        </div>
        <div className='py-4'>
            <h2 className="mb-4 fs-3">Related Products</h2>
            <ul className={`${Style.mediaScroller} d-flex gap-4`} >
                {products.map(product =>{
                    return(
                    <li key={product.id} className=" position-relative max-height-275 max-width-475  aspect-square  col-12 col-sm-6 col-md-3 ">
                        <Link className="position-relative  h-100 w-100  " href={`/product/${product.id}`}>
                            <div className={`${Style.imageContent}  d-flex h-100 w-100 aligns-items-center borderColor  justify-content-center rounded-lg bg-black`}>
                                <Image className=' object-contain' src={product.product_image}  fill />
                                <div className=" px-2 pb-4 position-absolute bottom-0 strat-0 d-flex" >
                                    <div className="d-flex borderColor align-items-center rounded-full bg-black font-weight-700 p-2">
                                        <h3 className="px-3 flex-grow text-center text-sm  ">{product.product_title}</h3>
                                        <p className="flex-none text-sm bg-primary p-2 rounded-full  text-white">${product.price}<span className="ms-1 ">USD</span></p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </li>
                    )
                })}
            </ul>
        </div>
        {cartItems.length ===0 ? (
                <div className="  mt-20 d-flex w-100 flex-column align-items-center justify-content-center overflow-hidden">     
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="height-16">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path>
                 </svg>
                 <p className="mt-4  text-center text-large font-weight-700" style={{fontSize:"1.5rem"}}>Your cart is empty.</p>
               </div>
            ) :(
              <div className="d-flex  h-100 overflow-hidden flex-column justify-content-between p-1">
              <ul className="py-3 overflow-auto flex-grow-1">
              {cartItems.map((item) => (
              <li key={item.id} item={item} className='d-flex border-b my-2'>
                <div className='d-flex justify-content-between align-content-center pb-4'>
                  <div className='d-flex'>
                    <div className='borderColor rounded-lg bg-neutral-900 position-relative'>
                      <div className='position-absolute -mt-3 ms-5 end-0 -me-1 '>
                        <button className='borderColor rounded-full bg-neutral-900 d-flex align-content-center justify-content-center' onClick={() => handleRemove(item.id)}>
                          <FaTimes className='text-black' />
                        </button>
                      </div>
                      <Link href="#">
                        <Image className='object-contain' src={item.product_image} width={64} height={64} />
                      </Link>
                    </div>
                    <div className='d-flex flex-column ps-2'>
                      <span className="ps-4">{item.product_title}</span>
                      <p className='textColor ps-4'>{item.quantity}</p>
                    </div>
                  </div>
                  <div className='d-flex flex-column'>
                    <p className="d-flex justify-content-end ">
                      ${item.price}
                      <span className="ms-2">USD</span>
                    </p>
                    <div className='borderColor rounded-full d-flex px-2 mt-2 '>
                      <button className='btn border-0' onClick={() => handleDecrease(item.id)}>
                        <FaMinus className='' />
                      </button>
                      <p className='d-flex text-center align-items-center'>
                        <span>{item.quantity}</span>
                      </p>
                      <button className='btn border-0' onClick={() => handleIncrease(item.id)}>
                        <FaPlus className=' ' />
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        )}      
    </div>
  )
}

export default PraductPage
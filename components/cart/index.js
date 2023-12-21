// "use client"



// import { useState } from "react";
// import { FaTimes, FaMinus, FaPlus } from 'react-icons/fa';
// import Link from 'next/link';
// import Image from 'next/image';
// import { useEffect } from "react";

// function CartPage() {
//   const [cartItems, setCartItems] = useState([]);
  
  

  const handleRemove = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
    
   
  };

  const handleDecrease = (itemId) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCartItems(updatedCart.filter((item) => item.quantity > 0));
  };

  const handleIncrease = (itemId) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
    
  };
 

//   return (
//     <div className="d-flex  h-100 overflow-hidden flex-column justify-content-between p-1">
//       <ul className="py-3 overflow-auto flex-grow-1">
//         {cartItems.map((item) => (
//           <li key={item.id} item={item} className='d-flex border-b my-2'>
//             <div className='d-flex justify-content-between align-content-center pb-4'>
//               <div className='d-flex'>
//                 <div className='borderColor rounded-lg bg-neutral-900 position-relative'>
//                   <div className='position-absolute -mt-3 ms-5 end-0 -me-1 '>
//                     <button className='borderColor rounded-full bg-neutral-900 d-flex align-content-center justify-content-center' onClick={() => handleRemove(item.id)}>
//                       <FaTimes className='text-black' />
//                     </button>
//                   </div>
//                   <Link href="#">
//                     <Image className='object-contain' src={item.product_image} width={64} height={64} />
//                   </Link>
//                 </div>
//                 <div className='d-flex flex-column ps-2'>
//                   <span className="ps-4">{item.product_title}</span>
//                   <p className='textColor ps-4'>{item.quantity}</p>
//                 </div>
//               </div>
//               <div className='d-flex flex-column'>
//                 <p className="d-flex justify-content-end ">
//                   ${item.price.toFixed(2)}
//                   <span className="ms-2">USD</span>
//                 </p>
//                 <div className='borderColor rounded-full d-flex px-2 mt-2 '>
//                   <button className='btn border-0' onClick={() => handleDecrease(item.id)}>
//                     <FaMinus className='' />
//                   </button>
//                   <p className='d-flex text-center align-items-center'>
//                     <span>{item.quantity}</span>
//                   </p>
//                   <button className='btn border-0' onClick={() => handleIncrease(item.id)}>
//                     <FaPlus className=' ' />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default CartPage;

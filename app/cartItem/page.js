
import { FaTimes, FaMinus, FaPlus } from 'react-icons/fa';

import Link from 'next/link';
import Image from 'next/image';

const CartItem = ({ item, onRemove, onDecrease, onIncrease }) => (

  <li className='d-flex border-b my-2'>
    <div className='d-flex justify-content-between align-content-center pb-4'>
      <div className='d-flex'>
        <div className='borderColor rounded-lg bg-neutral-900 position-relative'>
          <div className='position-absolute -mt-3 ms-5 end-0 -me-1 '>
            <button className='borderColor rounded-full bg-neutral-900 d-flex align-content-center justify-content-center' onClick={() => onRemove(item.id)}>
              <FaTimes className='text-black' />
            </button>
          </div>
          <Link href="#">
            <Image className='object-contain' src={item.image} width={64} height={64} />
          </Link>
        </div>
        <div className='d-flex flex-column ps-2'>
          <span className="ps-4">{item.product_title}</span>
          <p className='textColor ps-4'>{item.quantity}</p>
        </div>
      </div>
      <div className='d-flex flex-column'>
        <p className="d-flex justify-content-end ">
          ${item.price.toFixed(2)}
          <span className="ms-2">USD</span>
        </p>
        <div className='borderColor rounded-full d-flex px-2 mt-2 '>
          <button className='btn border-0' onClick={() => onDecrease(item.id)}>
            <FaMinus className='' />
          </button>
          <p className='d-flex text-center align-items-center'>
            <span>{item.quantity}</span>
          </p>
          <button className='btn border-0' onClick={() => onIncrease(item.id)}>
            <FaPlus className=' ' />
          </button>
        </div>
      </div>
    </div>
  </li>
);

export default CartItem;
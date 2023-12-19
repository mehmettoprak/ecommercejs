"use client"

import CartItem from "../cartItem/page";

import { useState } from "react";



function CartPage() {
   
    const [cartItems, setCartItems] = useState([]);
    
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
    
    return (
        <div>
      
            <ul>
                {cartItems.map((item) => (
                    <CartItem   key={item.id} item={item} onRemove={handleRemove} onDecrease={handleDecrease} onIncrease={handleIncrease} />
                ))}
            </ul>
        </div>
    );
}

export default CartPage
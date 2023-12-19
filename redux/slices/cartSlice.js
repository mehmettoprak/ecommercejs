import { createSlice } from "@reduxjs/toolkit";
// import Cookies from "js-cookie";






// const initialState = {
//     loading : "true",
//     cartItems : [],

// }

// const addDecimals = (num) =>{
//     return (Math.round(num * 100)/100).toFixed(2)
// }
// const cartSlice = createSlice ({
//     name : "cart",
//     initialState ,
//     reducers : {
//         addToCart : (state , action ) => {
//             const item = action.payload
//             const existItem = state.cartItems.find((x) => x.d ===item.id)
//             if(existItem){
//                 state.cartItems = state.cartItems .map((x) => 
//                     x.id === existItem.id ? item : x
//                 )
//             }else {
//                 state.cartItems = [...state.cartItems , item]
//             }
//             state.itemPrice = addDecimals (
//                 state.cartItems.reduce((acc ,item) => acc +item.price * item.qty , 0)
//             )
//             state.shippingPrace = addDecimals (state.itemPrice >100 ? 0 :100)
//             state.texPrace = addDecimals (
//                 Number((0.15 * state.itemPrice))
//             )
//             state.totalPrice = addDecimals (
//                 Number (state.itemPrice)+
//                 Number(state.shippingPrace)+
//                 Number (state.texPrace)
//             )

//             Cookies.set("cart" ,JSON.stringify(state))
//         },
//         removeFromCart : (state ,action) => {
//             state.cartItems = state.cartItems.filter((x) => x.id !== action.payload)
//             state.itemPrice = addDecimals (
//                 state.cartItems.reduce((acc ,item) => acc +item.price * item.qty , 0)
//             )
//             state.shippingPrace = addDecimals (state.itemPrice >100 ? 0 :100)
//             state.texPrace = addDecimals (
//                 Number((0.15 * state.itemPrice))
//             )
//             state.totalPrice = addDecimals (
//                 Number (state.itemPrice)+
//                 Number(state.shippingPrace)+
//                 Number (state.texPrace)
//             )

//             Cookies.set("cart" ,JSON.stringify(state))
//         },

//         hideLoading :(state) => {
//             state.loading =false
//         }
//     },
// })

// export const {addToCart , removeFromCart ,hideLoading} = cartSlice.actions;

// export default cartSlice.reducer



// const productSlice = createSlice({
//     name :"product",
//     initialState : {
//         data :[],
//         loading :true ,
//         error :null,
//         products :[]
//     },

//     reducers : {
//         getProductSucces :(state,action) => {
//             state.data =action.payload ;
//             state.loading = true ;
//             state.error =null ;
//         },
//         getProductFailure : (state ,action) => {
//             state.data =null ;
//             state.loading =false ;
//             state.error =action.payload ;
//         },
//         addToCart : (state ,action) => {
//             // Carta ekleme işlemleri
//         },
//         removeFromCart : (state ,action) =>{
//             // Carttan çıkarma işlemleri
//         }
//     }
// })

// export const {getProductSucces , getProductFailure ,addToCart , removeFromCart} = productSlice.actions ;

// export default productSlice.reducer ;
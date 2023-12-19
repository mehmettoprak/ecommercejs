// import { getProductSucces ,getProductFailure } from "../slices/cartSlice";

// export const fetchProductId =(id) => {
//     return async(dispatch) => {
//         try {
//             const res = await fetch(`http://localhost:3000/api/products/${id}`);

//             if(!res.ok){
//                 throw new Error("Failed to Fetch Product");
                
//             }

//             const product = await res.json();
//             dispatch(getProductSucces(product));
            
           
//         }catch (error) {
//             console.error('Error fetching product:', error);
//             dispatch(getProductFailure(error.message));
//         }
//     };
// };
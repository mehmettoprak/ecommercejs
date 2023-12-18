

export default async function getProduct (id) {
    const res = await fetch(`http://localhost:3000/api/products/${id}`);
    
    if(!res.ok){
        throw new Error('failed to fetch product');
    }

    return res.json();

    
}
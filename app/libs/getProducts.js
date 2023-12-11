

import React from 'react'

export default async function getProducts() {
    const res = await fetch("http://localhost:3000/api/products")

    if(!res.ok){
        throw new Error("failed to fetch products")
    }

    return await res.json();

}


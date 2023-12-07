

export default  async function Products(){
    const res = await fetch("http://localhost:3000/api/products");

    if(!res.ok){
        throw new Error("File not Found")
    }


    return res.json();

    
}
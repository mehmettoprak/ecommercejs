
export default async function homeList (){
    const res = await fetch("http://localhost:3000/api/home_list");

    if(!res.ok){
        throw new Error('failed to fetch product');
    }

    return res.json()

}
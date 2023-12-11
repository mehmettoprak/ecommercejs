import ProductData from "../../../product.json"

export default function handler (req ,res){
    const {method,cookies ,query} =req ;

    const {id} =query;

    const product = ProductData.product.find((p) => p.id ===parseInt(id) )

    if(!product){
        res.status(404).json( {message: "Ürün Bulunamadı "})
        return;
    }

    res.status(200).json(product)
    
}
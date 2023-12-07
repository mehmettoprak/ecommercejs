import Products from "../../../products.json"

export default function handeler(req, res){
    res.status(200).json(Products);
}
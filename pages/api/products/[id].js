import Products from "../../../data.json";

export default function handlerId(req, res) {
  const { method, cookies, query } = req;
  const { id } = query;

  const product = Products.products.find((ps) => ps.id === parseInt(id));

  if (!product) {
    res.status(404).json({ message: "Veri bulunamadı" });
    return;
  }

  res.status(200).json(product);
}
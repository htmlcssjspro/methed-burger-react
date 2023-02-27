import { getProducts } from '../../db/db.js';

export default async function handler(req, res) {
    const { category } = req.query;
    let products = getProducts();
    products = products.filter(item => item.category === category);

    res.status(200).json(products);
}

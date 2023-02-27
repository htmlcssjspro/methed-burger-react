import { getProducts } from '../../db/db.js';

export default async function handler(req, res) {
    const { id } = req.query;
    let products = getProducts();
    products = products.find(item => item.id === id);

    res.status(200).json(products);
}

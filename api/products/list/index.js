import { getProducts } from '../../db/db.js';

export default async function handler(req, res) {
    const { list } = req.query;
    let products = getProducts();
    products = products.filter(item => list.includes(item.id));

    res.status(200).json(products);
}

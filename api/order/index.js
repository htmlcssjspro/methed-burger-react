import path from 'node:path';
import { readFileSync, writeFile } from 'node:fs';
import ApiError from '../common/ApiError.js';
// import * as url from 'url';
// const __filename = url.fileURLToPath(import.meta.url);
// const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const ordersPath = path.join(process.cwd(), 'api', 'orders', 'orders.json');
const getOrdersDB = () => {
    const ordersJson = readFileSync(ordersPath, { encoding: 'utf8', flag: 'r' });
    return JSON.parse(ordersJson || '[]');
};

const createOrder = (order) => {
    if (Object.keys(order).length === 0) throw new ApiError(400, { message: 'Order is empty' });

    order.id = Math.random().toString(16).substring(2, 12);
    order.createdAt = new Date().toGMTString();

    const orders = getOrdersDB();
    orders.push(order);
    writeFile(ordersPath, JSON.stringify(orders), (err) => {
        if (err) throw err;
        console.log('Orders has been saved!'); // eslint-disable-line no-console
    });

    return order;
};

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            // const orderData = await drainJson(req.body);
            const orderData = req.body;
            const order = createOrder(orderData);

            res.setHeader('Access-Control-Expose-Headers', 'Location');
            res.setHeader('Location', `api/order/${order.id}`);
            res.status(201).json(order);
            return;
        } catch (err) {
            console.error(err);
            if (err instanceof ApiError) {
                res.status(500).json(err);
            } else {
                res.status(500).json(err);
            }
        }
    }
    res.send();
}

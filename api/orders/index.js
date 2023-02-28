import path from 'node:path';
import { readFileSync } from 'node:fs';
import * as url from 'url';
// const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));


export default async function handler(req, res) {
    const ordersPath = path.resolve(__dirname, 'orders.json');
    const ordersJson = readFileSync(ordersPath, { encoding: 'utf8', flag: 'r' });
    const ordersDB = JSON.parse(ordersJson || '[]');

    const orders = ordersDB.map(item => {
        return `
            <div>
                Имя: ${item.name}, Телефон: ${item.phone}, Заказ: ${JSON.stringify(item.orderList)}
            </div>
        `;
    });

    const document = `
        <!DOCTYPE html>
        <html lang="ru">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Orders</title>
        </head>
        <body>
            <h1>Заказы</h1>
            ${orders}
        </body>
        </html>
    `;

    res.status(200).send(document);
}

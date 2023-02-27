import path from 'node:path';
import { readFile, readFileSync } from 'node:fs';
import * as url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export default async function handler(req, res) {
    const { image } = req.query;
    const extension = path.extname(image);
    const contentType =
        extension === '.jpg'
            ? 'image/jpeg'
            : extension === '.png'
                ? 'image/png'
                : 'application/octet-stream';

    const imagePath = path.join(process.cwd(), 'api', 'img', image);
    res.setHeader('content-type', contentType);

    // readFile(imagePath, (err, imageBuffer) => {
    //     if (err) throw err;
    //     res.status(200).send(imageBuffer);
    // });

    const imageBuffer = readFileSync(imagePath);
    res.status(200).send(imageBuffer);
}

import path from 'node:path';
import { readFileSync } from 'node:fs';
import * as url from 'url';
// const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const categoriesPath = path.resolve(__dirname, 'categories.json');
const categoriesJson = readFileSync(categoriesPath, { encoding: 'utf8', flag: 'r' });
const categoriesDB = JSON.parse(categoriesJson || '[]');

const productsPath = path.resolve(__dirname, 'products.json');
const productsJson = readFileSync(productsPath, { encoding: 'utf8', flag: 'r' });
const productsDB = JSON.parse(productsJson || '[]');

export const getCategories = () => categoriesDB;
export const getProducts = () => productsDB;

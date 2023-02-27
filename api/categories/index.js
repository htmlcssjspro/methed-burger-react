import { getCategories } from '../db/db.js';

export default async function handler(req, res) {
    res.status(200).json(getCategories());
}

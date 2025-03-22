// api/ordernumber.js
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI; // Укажите URI вашей MongoDB
const client = new MongoClient(uri);

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            await client.connect();
            const db = client.db('orderDB');
            const order = await db.collection('ordernumbers').findOne();
            res.status(200).json({ orderNumber: order ? order.value : 24000 });
        } catch (error) {
            res.status(500).json({ error: 'Error fetching order number' });
        } finally {
            await client.close();
        }
    } else if (req.method === 'POST') {
        const { newOrderNumber } = req.body;
        try {
            await client.connect();
            const db = client.db('orderDB');
            await db.collection('ordernumbers').updateOne(
                {},
                { $set: { value: newOrderNumber } },
                { upsert: true }
            );
            res.status(200).json({ success: true });
        } catch (error) {
            res.status(500).json({ error: 'Error updating order number' });
        } finally {
            await client.close();
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}

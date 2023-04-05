import client from '../../../config/db';

export default async function handler(req, res) {
    if(req.method === 'POST') {
        await client.connect();
        const db = await client.db('feedback');
        const feedback = db.collection('feedback')
        const { body } = req;
        await feedback.insertOne({
            name: body.name,
            email: body.email,
            feedback: body.feedback,
            eventId: body.eventId
        });
        res.status(201).json({
            message: 'Feedback sent successful'
        });
    }
}
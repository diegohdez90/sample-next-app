import { connect, create, close } from '../../../config/db';

export default async function handler(req, res) {
    if(req.method === 'POST') {
        const client = await connect();
        const { body } = req;
        await create(client, 'feedback', 'feedback', {
            name: body.name,
            email: body.email,
            feedback: body.feedback,
            eventId: body.eventId
        });
        res.status(201).json({
            message: 'Feedback sent successful'
        });
        close(client);
    }
}
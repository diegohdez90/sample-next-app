import { MongoClient, ServerApiVersion } from 'mongodb';


export async function connect() {

    const mongoClient = new MongoClient('mongodb+srv://erembroc:f87B2gN6srDAR15D@feedbackcluster.tc8zwhk.mongodb.net/?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverApi: ServerApiVersion.v1 });
    
    try {
        await mongoClient.connect();
        return mongoClient;
    } catch (error) {
        console.error('Connection failed!');
        process.exit();
    }
}

export async function create(client, dbName, collection, data) {
    const db = client.db(dbName);
    await db.collection(collection).insertOne(data);
}

export async function close(client) {
    client.close();
}

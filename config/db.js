const MongoDB = require('mongodb');
const ServerApiVersion = MongoDB.ServerApiVersion;

const mongoClient = new MongoDB.MongoClient('mongodb+srv://erembroc:f87B2gN6srDAR15D@feedbackcluster.tc8zwhk.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1 });


async function connect() {

    try {
        await mongoClient.connect();
        await mongoClient.db('feedback')
    } catch (error) {
        console.error('Connection failed!');
        process.exit();
    }
}

connect().catch(console.dir);

module.exports = mongoClient;

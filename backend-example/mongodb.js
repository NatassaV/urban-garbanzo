const { MongoClient } = require('mongodb');
// const fs = require('fs')

const credentials = '/home/josh/Downloads/X509-cert-7396365317458111254.pem';

const client = new MongoClient(
    'mongodb+srv://cluster0.e4hcm.mongodb.net/myFirstDatabase?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority',
    {
        sslKey: credentials,
        sslCert: credentials,
    }
);

async function run() {
    try {
        await client.connect();
        const database = client.db('sample_analytics');
        const collection = database.collection('accounts');
        const docCount = await collection.countDocuments({});
        console.log(docCount);
        // perform actions using client
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

run().catch(console.dir);

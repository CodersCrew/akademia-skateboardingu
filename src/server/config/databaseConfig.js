const mongoose = require('mongoose');
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri =
    'mongodb+srv://annar:QazwsxEdc@cluster0.tmkg2z6.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

async function run() {
    try {
        await client.connect();
        await client.db('admin').command({ ping: 1 });
        console.log('Connected to MongoDB');
    } finally {
        await client.close();
    }
}

module.exports = run;

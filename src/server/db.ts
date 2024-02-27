import { MongoClient, ServerApiVersion } from 'mongodb';
import mongoose from 'mongoose';

import { MONGODB_HOST, MONGODB_PASS, MONGODB_USER } from '@/environment';

const uri = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASS}@${MONGODB_HOST}`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
});

const run = async () => {
  try {
    await client.connect();
    await client.db('admin').command({ ping: 1 });
    console.log('Connected to MongoDB');
  } finally {
    await client.close();
  }
};

mongoose.connect(uri);

run();

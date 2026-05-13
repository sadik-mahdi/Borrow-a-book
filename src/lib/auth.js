import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

let client;
let dbPromise;

function getDb() {
  if (!dbPromise) {
    client = new MongoClient(process.env.MONGODB_URI);
    dbPromise = client.connect().then(c => c.db('borrow-book'));
  }
  return dbPromise;
}

const db = await getDb();

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client
  }),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }
  }
});
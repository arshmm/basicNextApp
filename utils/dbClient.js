import { MongoClient } from "mongodb";

const dbClient = async (uri) => {
  const client = await MongoClient.connect(uri);
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  return meetupsCollection;
};

export { dbClient };

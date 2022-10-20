import { MongoClient } from "mongodb";
import { dbClient } from "../../utils/dbClient";

async function handler(req, res) {
  if (req.method == "POST") {
    const { title, image, address, description } = req.body;
    const meetupsCollection = await dbClient(process.env.DB_URI);
    const response = await meetupsCollection.insertOne({
      title,
      image,
      address,
      description,
    });

    res.status(201).json({ message: "meetup insterted" });
  }
}
export default handler;

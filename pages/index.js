import MeetupList from "../components/meetups/MeetupList";

import { dbClient } from "../utils/dbClient";

const homePage = ({ meetups }) => {
  return <MeetupList meetups={meetups} />;
};

export async function getStaticProps() {
  const meetupsCollection = await dbClient(process.env.DB_URI);
  const data = await meetupsCollection.find().toArray();
  return {
    props: {
      meetups: data.map((m) => ({
        id: m._id.toString(),
        title: m.title,
        address: m.address,
        image: m.image,
      })),
    },
  };
}

export default homePage;

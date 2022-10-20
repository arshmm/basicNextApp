import MeetupDetails from "../../components/meetups/MeetupDetails";
import { ObjectId } from "mongodb";
import { dbClient } from "../../utils/dbClient";

const meetupDetails = ({ title, address, image, description }) => {
  return (
    <MeetupDetails
      title={title}
      image={image}
      description={description}
      address={address}
    />
  );
};

export async function getStaticPaths(context) {
  const meetupsCollection = await dbClient(process.env.DB_URI);
  const data = await meetupsCollection.find({}, { _id: 1 }).toArray();

  return {
    fallback: false,
    paths: data.map((x) => ({ params: { meetupId: x._id.toString() } })),
  };
}
export async function getStaticProps(context) {
  const meetupsCollection = await dbClient(process.env.DB_URI);
  const id = context.params.meetupId;
  const data = await meetupsCollection.findOne({ _id: ObjectId(id) });

  return {
    props: {
      id: data._id.toString(),
      title: data.title,
      address: data.address,
      image: data.image,
    },
  };
}

export default meetupDetails;

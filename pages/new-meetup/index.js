import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const router = useRouter();
  const meetupHandler = async (data) => {
    const res = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    });
    const resData = await res.json();
    console.log(resData);
    router.push("/");
  };
  return <NewMeetupForm onAddMeetup={meetupHandler} />;
};

export default NewMeetupPage;

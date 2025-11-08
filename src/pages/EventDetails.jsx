import React from "react";
import Header from "../components/header";
import useFetch from "../useFetch";
import { useParams } from "react-router-dom";

const EventDetails = () => {
  const { data, loading, error } = useFetch("http://localhost:3000/meetups");
  console.log(data);
  

  const eventId = useParams();
  console.log(eventId);
  

  if (loading) return <p>Loading event details...</p>;
  if (error) return <p>Error loading event.</p>;

  const findEvent = data?.find((event) => event._id == eventId.eventId);
  console.log(findEvent);


  return (
    <>
      <Header />
      <hr />
      <main className="container">
        <div className="top pt-4">
          <div className="left">
            <h1 className="fw-bold">{findEvent.title}</h1>
            <div>
              <h5 className="fw-regular">Hosted By:</h5>
            </div>
          </div>
          <div className="right"></div>
        </div>
      </main>
    </>
  );
};

export default EventDetails;

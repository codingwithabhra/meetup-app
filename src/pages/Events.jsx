import React from "react";
import Header from "../components/Header";
import Footers from "../components/Footers";
import useFetch from "../useFetch";
import { useParams } from "react-router-dom";

const Events = () => {
  const { data, loading, error } = useFetch("https://meetup-backend-xi.vercel.app/meetups");
  console.log(data);

  const eventId = useParams();
  console.log(eventId);

  if (loading) return <p>Loading event details...</p>;
  if (error) return <p>Error loading event.</p>;

  const findEvent = data?.find((event) => event._id == eventId.eventId);
  console.log(findEvent);

  if (!findEvent) return <p>Event not found.</p>;

  return (
    <>
      <Header className="container">
        <Header />
      </Header>

      <main className="container">
        <hr />
        <div className="top pt-4 row justify-content-between">
          <div className="left col-lg-6 col-md-12 mb-4">
            <h1 className="fw-bold pb-4">{findEvent.title}</h1>
            <div className="mb-5">
              <h5 className="fw-normal">Hosted By:</h5>
              <h4 className="fw-bold">{findEvent.hostedBy}</h4>
            </div>
            <div className="mb-5">
              <img
                src={findEvent.coverImageUrl}
                alt="cover-image"
                className="img-fluid event-image"
              />
            </div>
            <div className="pb-3">
              <h4 className="fw-bolder">Details:</h4>
              <p>{findEvent.details}</p>
            </div>
            <div className="pb-3">
              <h4 className="fw-bolder mb-4">Additional Information</h4>
              <p>
                <span className="fw-bold">Dress Code: </span>
                {findEvent.dressCode}
              </p>
              <p>
                <span className="fw-bold">Age Restrictions: </span>
                {findEvent.ageLimit}
              </p>
            </div>
            <div>
              <h4 className="fw-bolder">Event Tags:</h4>
              <p className="d-flex flex-wrap gap-2">
                {findEvent.eventTags?.split(",").map((tag, index) => (
                  <span
                    key={index}
                    className="badge bg-danger text-white px-3 py-2"
                  >
                    {tag.trim()}
                  </span>
                ))}
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="p-4 border rounded shadow-sm bg-light">
              <p>
                <span>
                  <i className="fa-solid fa-clock" style={{ color: "#d40202" }}></i>{" "}
                </span>
                {findEvent.date} | {findEvent.time}
              </p>
              <p>
                <span>
                  <i
                    className="fa-solid fa-location-dot"
                    style={{ color: "#d40202" }}
                  ></i>
                </span>{" "}
                {findEvent.address}
              </p>
              <p>
                <span>
                  <i
                    className="fa-solid fa-sack-dollar"
                    style={{ color: "#d40202" }}
                  ></i>
                </span>{" "}
                {findEvent.price}
              </p>
            </div>

            <div className="mt-4">
              <h5 className="fw-bold">
                Speakers: ({findEvent.speakers.length})
              </h5>

              <div className="d-flex flex-wrap gap-3 mt-3">
                {findEvent.speakers.map((speaker, index) => (
                  <div
                    key={index}
                    className="p-3 border border-danger rounded text-danger fw-semibold shadow-sm"
                    style={{ minWidth: "120px", textAlign: "center",  }}
                  >
                    {speaker}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footers />
    </>
  );
};

export default Events;

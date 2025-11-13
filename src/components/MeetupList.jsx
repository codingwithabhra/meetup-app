import useFetch from "../useFetch";
import { Link } from "react-router-dom";
import { useState } from "react";

const MeetupList = ({ searchItem }) => {
  const [mode, setMode] = useState("both");
  const { data, loading, error } = useFetch("https://meetup-backend-xi.vercel.app/meetups");
  const filterModeWise =
    mode === "both" ? data : data.filter((event) => event.mode === mode);
  const finalfiltering = filterModeWise?.filter(
    (event) =>
      event.title.toLowerCase().includes(searchItem.toLowerCase()) ||
      event.eventTags.toLowerCase().includes(searchItem.toLowerCase())
  );

  return (
    <div className="container-fluid">
      <div className="top d-flex justify-content-between align-items-center">
        <div className="left">
          <h2 className="fs-1 fw-bold">Meetup Events</h2>
        </div>
        <div className="right">
          <select
            className="form-select"
            value={mode}
            onChange={(e) => setMode(e.target.value)}
          >
            <option value="both">Both</option>
            <option value="online">Online</option>
            <option value="offline">Offline</option>
          </select>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4 pt-5">
        {finalfiltering?.map((event) => (
          <Link
            to={`/meetups/${event._id}`}
            className="link-underline link-underline-opacity-0"
            key={event._id}
          >
            <div className="col">
              <div
                className="card pb-4"
                style={{
                  border: "none",
                  background: "none",
                  position: "relative",
                }}
              >
                <div
                  className="position-absolute top-0 start-0 m-2 px-2 py-1 rounded text-dark fw-semibold"
                  style={{
                    backgroundColor: "white",
                    fontSize: "0.85rem",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.15)",
                  }}
                >
                  {event.mode}
                </div>

                <img
                  src={event.coverImageUrl}
                  alt=""
                  className="card-img-top rounded"
                  style={{ height: "18rem" }}
                />
                <div>
                  <span>
                    {event.date} <span>{event.time}</span>
                  </span>
                  <h4 className="fw-bold">{event.title}</h4>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MeetupList;

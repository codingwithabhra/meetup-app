import useFetch from "../useFetch";
import { Link } from "react-router-dom";

const MeetupList = () => {
  const { data, loading, error } = useFetch("http://localhost:3000/meetups");
  // console.log(data);

  return (
    <div className="container-fluid">
      <div className="top">
        <h2 className="fs-1 fw-bold">Meetup Events</h2>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4 pt-5">
        {data?.map((event) => (
          <Link to={`/meetups/${event._id}`} className="link-underline link-underline-opacity-0">
            <div className="col" key={event._id}>
              <div className="card pb-4" style={{ border: "none" }}>
                <img
                  src={event.coverImageUrl}
                  alt=""
                  className="card-img-top rounded"
                  style={{ height: "20rem" }}
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

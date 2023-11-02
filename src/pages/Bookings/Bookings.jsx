import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  console.log(user?.email);
  const url = `http://localhost:5313/bookings?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [url]);

  return (
    <>
      {bookings.map((booking) => (
        <div key={booking._id} className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={booking?.img}
              alt={booking?.service}
              className="rounded-xl"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{booking?.title}</h2>
            {/* <p>{description}</p> */}
            <p className="text-xl text-orange-500">Price: ${booking?.price}</p>
            <div className="card-actions">
              <button className="btn btn-primary">
                <Link to={`/services/${booking?._id}`}>Book Now</Link>
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Bookings;

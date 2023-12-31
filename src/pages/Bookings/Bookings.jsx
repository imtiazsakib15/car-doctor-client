import { useEffect, useState } from "react";
// import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const Bookings = () => {
  // const { user } = useContext(AuthContext);
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  useEffect(() => {
    axios
      .get(url, { withCredentials: true })
      .then((res) => setBookings(res.data))
      .catch((error) => {
        console.log(error);
      });

    // fetch(url, { credentials: "include" })
    //   .then((res) => res.json())
    //   .then((data) => setBookings(data));
  }, [url]);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount === 1) {
          const remaining = bookings.filter((booking) => booking._id !== id);
          setBookings(remaining);
        }
      });
  };
  const handleConfirm = (id) => {
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  if (bookings.length === 0)
    return (
      <div className="grid place-items-center h-[80vh]">
        <h2 className="text-4xl font-bold">No Booking Found!</h2>
      </div>
    );

  return (
    <div className="py-16">
      <h2 className="text-3xl font-semibold">
        Total Booking: {bookings.length}
      </h2>
      <div className="overflow-x-auto pt-10">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Service</th>
              <th>Service Title</th>
              <th>Date</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking._id}>
                <th>
                  <button
                    onClick={() => handleDelete(booking._id)}
                    className="btn btn-circle btn-sm btn-outline"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={booking.img}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="font-bold">{booking.service_title}</td>
                <td>{booking.date}</td>
                <td>${booking.price}</td>
                <th>
                  {booking.status == "confirm" ? (
                    <span className="text-lg font-bold text-green-600">
                      Confirmed
                    </span>
                  ) : (
                    <button
                      onClick={() => handleConfirm(booking._id)}
                      className="btn btn-ghost btn-xs"
                    >
                      Confirm
                    </button>
                  )}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;

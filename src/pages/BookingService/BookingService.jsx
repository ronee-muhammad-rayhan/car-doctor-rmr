import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const BookingService = () => {
    const service = useLoaderData();
    const { user } = useContext(AuthContext);
    // console.log(booking);
    const { _id, title, price, img } = service;

    const handleBooking = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const date = form.date.value;

        const booking = {
            customerName: name,
            email,
            img,
            date,
            service: title,
            service_id: _id,
            price: price
        }

        fetch(`http://localhost:5313/bookings/${_id}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(booking)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert('service book successfully');
                }
            })
    }

    return (
        <form onSubmit={handleBooking} className="card-body">
            <h2 className="text-center font-bold text-3xl">Book Service: {title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name='name' defaultValue={user?.displayName} placeholder="Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Date</span>
                    </label>
                    <input type="date" name='date' className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" defaultValue={user?.email} className="input input-bordered" required readOnly />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Due Amount</span>
                    </label>
                    <input type="text" defaultValue={`$${price}`} className="input input-bordered" required />
                </div>
            </div>
            <div className="form-control mt-6">
                <input type="submit" className="btn btn-primary" value='Confirm Order' />
            </div>
        </form>
    );
};

export default BookingService;
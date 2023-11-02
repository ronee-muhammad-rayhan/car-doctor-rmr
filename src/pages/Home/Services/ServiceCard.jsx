import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const ServiceCard = ({ service }) => {
  const { _id, title, img, price /* description */ } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {/* <p>{description}</p> */}
        <p className="text-xl text-orange-500">Price: ${price}</p>
        <div className="card-actions">
          <button className="btn btn-primary">
            <Link to={`/services/${_id}`}>Book Now</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.shape({
    description: PropTypes.any,
    img: PropTypes.any,
    price: PropTypes.any,
    title: PropTypes.any,
  }),
};

export default ServiceCard;

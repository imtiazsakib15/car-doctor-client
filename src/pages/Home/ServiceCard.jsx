import PropTypes from "prop-types";
import { AiOutlineArrowRight } from "react-icons/ai";
const ServiceCard = ({ service }) => {
  const { img, title, price } = service;
  return (
    <>
      <div className="card rounded-lg border p-6">
        <figure className="">
          <img src={img} alt="" className="rounded-xl w-full h-48" />
        </figure>
        <div className="text-center">
          <h2 className="text-lg md:text-2xl font-bold mt-3">{title}</h2>
          <div className="flex justify-between items-center mt-2 text-orange-500 text-lg font-bold">
            <p>Price: ${price}</p>
            <AiOutlineArrowRight />
          </div>
        </div>
      </div>
    </>
  );
};
ServiceCard.propTypes = {
  service: PropTypes.object,
};

export default ServiceCard;

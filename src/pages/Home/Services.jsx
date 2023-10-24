import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="text-center">
      <p className="text-orange-500 font-bold text-lg md:text-xl">Services</p>
      <h1 className="text-xl md:text-4xl font-bold pt-2">Our Service Area</h1>
      <p className="pt-5 max-w-xl mx-auto">
        The majority have suffered alteration in some form, by injected humour,
        or randomised words which don&apos;t look even slightly believable.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
        {services?.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;

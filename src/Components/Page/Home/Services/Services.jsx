import React from "react";

// React icons
import { ImTruck } from "react-icons/im";
import { FaHeadset } from "react-icons/fa";
import { BsFillTagsFill } from "react-icons/bs";
import { BiLock } from "react-icons/bi";

const Services = () => {
  const services = [
    {
      id: 1,
      heading: "Fast Delivery",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      servicesIcon: <ImTruck />,
    },
    {
      id: 2,
      heading: "24 x 7 Services",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      servicesIcon: <FaHeadset />,
    },
    {
      id: 3,
      heading: "Best Deal",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      servicesIcon: <BsFillTagsFill />,
    },
    {
      id: 4,
      heading: "Secure Payment",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      servicesIcon: <BiLock />,
    },
  ];
  return (
    <section className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-20">
      {services.map((data) => (
        <div
          key={data.id}
          className="bg-[#150F2D]	p-5 rounded-lg pb-10 shadow-sm shadow-indigo-500/40 font-medium"
        >
          <i className="text-3xl flex justify-center items-center mb-4 text-cyan-500">
            {data.servicesIcon}
          </i>
          <h4 className="text-2xl mb-2 shadow-2xl shadow-blue-500/50 font-medium	">
            {data.heading}
          </h4>
          <p>{data.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Services;

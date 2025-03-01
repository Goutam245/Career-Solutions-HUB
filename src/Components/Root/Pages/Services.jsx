import React, { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import PrivateRoute from "../Router/PrivateRoute";
import { Helmet } from "react-helmet";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Assuming services.json is stored locally
    fetch("/services.json")
      .then((response) => response.json())
      .then((data) => setServices(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className=" py-10">
      <Helmet>
                <meta charSet="utf-8" />
                <title>Services</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <h2 className="text-4xl font-bold text-center mb-6">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service) => (
          <div
            key={service.id}
            className="card bg-base-300 shadow-md rounded-lg p-5 hover:shadow-xl transition duration-300"
          >
            <img
              src={service.image}
              alt={service.serviceName}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-blue-600">{service.serviceName}</h3>
            <p className="text-black ">{service.category}</p>
            <p className="text-lg font-medium mt-2">Pricing: {service.pricing}</p>
            <p className="text-sm text-blue-500 mt-1 py-4">
              Counselor: <span className="font-semibold">{service.counselorName}</span>
            </p>
            <button className="btn btn-primary gap-4"> 
              
              <NavLink to ={service.details}> Learn More</NavLink>
                
                 
            

            </button>

            {/* <a
              href={service.details}
              className="btn btn-primary mt-4 inline-block"
            >
              Learn More
            </a> */}
          </div>
        ))}
      </div>
     




     
    </div>
  );
};

export default Services;

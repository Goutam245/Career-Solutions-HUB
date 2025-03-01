import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const AppointmentManagement = () => {
  const [services, setServices] = useState([]);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Fetching services data from a local JSON file
    fetch("/services.json")
      .then((response) => response.json())
      .then((data) => setServices(data))
      .catch((err) => console.error("Error fetching services:", err));
  }, []);

  const handleBookAppointment = (service) => {
    // Adding the selected service to the appointments list
    if (!appointments.find((appointment) => appointment.id === service.id)) {
      setAppointments([...appointments, service]);
    //   alert(`${service.serviceName} has been booked!`);
      toast(`${service.serviceName} has been booked!`)
    } else {
      alert(`${service.serviceName} is already booked.`);
    }
  };

  return (
    <div className="py-10">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Appointment Management</title>
        <link rel="canonical" href="http://mysite.com/appointments" />
      </Helmet>

      <h2 className="text-4xl font-bold text-center mb-6">Book Your Appointment</h2>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service) => (
          <div
            key={service.id}
            className="card bg-base-300 shadow-md rounded-lg p-5 hover:shadow-xl transition duration-300"
          >
            {/* Service Image */}
            <img
              src={service.image}
              alt={service.serviceName}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />

            {/* Service Details */}
            <h3 className="text-xl font-semibold text-blue-600">{service.serviceName}</h3>
            <p className="text-black">{service.category}</p>
            <p className="text-lg font-medium mt-2">Pricing: {service.pricing}</p>
            <p className="text-sm text-blue-500 mt-1">
              Counselor: <span className="font-semibold">{service.counselorName}</span>
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-4">
              <NavLink to={service.details} className="btn btn-secondary">
                Learn More
              </NavLink>
              <button
                onClick={() => handleBookAppointment(service)}
                className="btn btn-primary"
              >
                Book Appointment
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Appointments Section */}
      <div className="max-w-6xl mx-auto mt-10">
        <h3 className="text-3xl font-bold mb-4">Your Appointments</h3>
        {appointments.length > 0 ? (
          <ul className="space-y-4">
            {appointments.map((appointment) => (
              <li
                key={appointment.id}
                className="p-4 bg-base-300 rounded-lg shadow-md flex justify-between items-center"
              >
                <div>
                  <h4 className="text-xl font-semibold">{appointment.serviceName}</h4>
                  <p>{appointment.category}</p>
                  <p className="text-blue-500">Counselor: {appointment.counselorName}</p>
                </div>
                <p className="text-lg font-medium">{appointment.pricing}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No appointments booked yet.</p>
        )}
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default AppointmentManagement;

import React, { useEffect, useState } from "react";
import axios from "axios";

function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Fetch services from the API endpoint
    axios
      .get(
        "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
      )
      .then((response) => {
        // Update state with the fetched services
        setServices(response.data.services);
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
      });
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <div
      className="sec-box services section-padding bord-thin-bottom"
      id="services"
    >
      <div className="sec-head mb-80 wow fadeInUp">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <h6 className="sub-title opacity-7 mb-15">Our Services</h6>
            <h3>
              Turn Information{" "}
              <span className="main-color">Into Actionable</span> Insights
            </h3>
          </div>
        </div>
      </div>
      <div className="row">
        {services.map((item, index) => (
          <div key={index} className="col-md-6">
            <div className="item mb-40 wow fadeIn" data-wow-delay=".2s">
              <span className="icon-img-70 mb-30 opacity-7">
                <img src={item.image.url} alt="" />
              </span>
              <h6 className="text-u ls1 mb-15">{item.title}</h6>
              <p>{item.description}</p>
              <div className="bord-color"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;

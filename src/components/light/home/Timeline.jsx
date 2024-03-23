import React, { useEffect, useState } from "react";
import axios from "axios";

function Timeline() {
  const [timelineData, setTimelineData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
      )
      .then((response) => {
        setTimelineData(response.data.user.timeline);
        console.log(response.data.user.timeline);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <section className="timeline-section section-padding" id="timeline">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="sec-head mb-80 wow fadeInUp">
              <h6 className="sub-title opacity-7 mb-15">Timeline</h6>
              <h3>
                My <span className="main-color">Experience</span> &{" "}
                <span className="main-color">Education</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          {timelineData.map((item, index) => (
            <div key={index} className="col-lg-6">
              <div className="time-item">
                <h6 className="time-period">
                  {item.startDate} - {item.endDate}
                </h6>
                <div className="time-content">
                  <h6>{item.jobTitle}</h6>
                  <p>{item.company_name}</p>
                  <ul>
                    {item.bulletPoints.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Timeline;

import React, { useEffect, useState } from "react";
import axios from "axios";

function NavTop() {
  const [social, setSocial] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
      )
      .then((response) => {
        setSocial(response.data.user.social_handles);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="nav-top pt-30 pb-30">
      <div className="container">
        <div className="row">
          <div className="col-md-4 valign">
            <a href="#0" className="logo icon-img-60">
              <img src="/assets/imgs/logo-dark.png" alt="" />
            </a>
          </div>
          <div className="col-md-4 valign">
            <div className="social text-center full-width">
              {social.map((handle, index) => (
                <a key={index} href={handle.url}>
                  <img src={handle.image.url} alt={handle.platform} />
                </a>
              ))}
            </div>
          </div>
          <div className="col-md-4 valign">
            <div className="full-width info">
              <div className="d-flex justify-content-end">
                <a href="mailto:abc@example.com">
                  <span className="sub-title fz-12">Gavi@website.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-butn">
          <span className="pe-7s-menu"></span>
        </div>
      </div>
    </div>
  );
}

export default NavTop;

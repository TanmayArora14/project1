import React, { useEffect, useState } from "react";
import axios from "axios";

function Profile() {
  const [profileData, setProfileData] = useState({
    name: "",
    title: "",
    subTitle: "",
    description: "",
    quote: "",
    exp_year: "",
    address: "",
    phoneNumber: "",
    avatarUrl: "",
  });

  useEffect(() => {
    axios
      .get(
        "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
      )
      .then((response) => {
        const userData = response.data.user;
        const newProfileData = {
          name: userData.name,
          title: userData.title,
          subTitle: userData.subTitle,
          description: userData.description,
          quote: userData.quote,
          exp_year: userData.exp_year,
          address: userData.address,
          phoneNumber: userData.phoneNumber,
          avatarUrl: userData.avatar.url,
        };
        setProfileData(newProfileData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <section className="intro-profile md-mb50">
      <div className="row rest">
        <div className="col-lg-4 box-img main-bg">
          <div className="cont valign">
            <div className="full-width">
              <div className="img">
                <img src={profileData.avatarUrl} alt={profileData.name} />
                {/* Add social icons here if needed */}
              </div>
              <div className="info text-center mt-30">
                <h5>{profileData.name}</h5>
                <p className="fz-13 text-u">{profileData.subTitle}</p>
              </div>
              {/* Social links can be added here */}
            </div>
          </div>
        </div>
        <div className="col-lg-8 content main-bg">
          <h1>
            Hello, I’m <span className="main-color">{profileData.name}</span>,{" "}
            {profileData.title} and{" "}
            <span className="bord">
              {profileData.subTitle} <i></i>
            </span>{" "}
            Based in {profileData.address}.
          </h1>
          <div className="stauts mt-80">
            <div className="d-flex align-items-center">
              <div className="mr-40">
                <div className="d-flex align-items-center">
                  <h2>{profileData.exp_year}</h2>
                  <p>
                    Years <br /> of Experience
                  </p>
                </div>
              </div>
              {/* Add more status information here if needed */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;

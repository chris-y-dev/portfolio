import React, { useEffect, useState } from "react";
import "./Footer.scss";
import ISocialData from "../../interfaces/ISocialData";
import fetchStaticImage from "../../hooks/fetchStaticImage";
import SocialData from "../../assets/data/SocialData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  const [socialData, setSocialData] = useState<ISocialData[]>([]);

  useEffect(() => {
    setSocialData(SocialData);
  }, []);

  const footerMessage =
    "So, you have scrolled all the way to the footer......Thanks for browsing through my portfolio site! Feel free to say hi if you'd like to discuss some of my work or experience!";

  return (
    <div className="border-blue row m-0" id="socials">
      <div className="p-5 socials_container footer-containers_sizing col-md-5 col-sm-12">
        <h2>AVAILABLE FOR SELECT FREELANCE OPPORTUNITIES</h2>
        <ul className="mt-5">
          {socialData.map((item) => {
            return (
              <li className="my-4 d-flex">
                <a href={item.link} className="">
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="me-3 social_icon"
                  />
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="p-5 second_container footer-containers_sizing col-md-7 col-sm-12 d-flex flex-column justify-content-between">
        <div className="profile_container d-flex flex-row flex-wrap">
          <div className="profile-message_container">
            <div className="profile-message_image-container">
              <img
                src={fetchStaticImage("/footer/profile-pic.jpg")}
                alt="Profile Pic"
              />
            </div>
          </div>
          <p className="profile-message_message ms-4">{footerMessage}</p>
        </div>
        <a href="https://www.linkedin.com/in/chris-y-dev/">
          <img
            src={fetchStaticImage("/footer/connect-with-me_crop.gif")}
            alt="Connect with me"
            className="typography"
          />
        </a>
        <p className="text-end">VERSION 1.1</p>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import "./Footer.scss";
import SocialData from "../../interfaces/SocialData";
import fetchStaticImage from "../../hooks/fetchStaticImage";

const Footer = () => {
  const socialData: SocialData[] = [
    { socialName: "LinkedIn", socialIconPath: "/", socialLink: "/" },
    { socialName: "Github", socialIconPath: "/", socialLink: "/" },
    { socialName: "Leetcode", socialIconPath: "/", socialLink: "/" },
  ];

  return (
    <div className="border-blue row m-0" id="socials">
      <div className="py-5 ps-5 pe-5 socials_container footer-containers_sizing col-md-5 col-sm-12">
        <h2>AVAILABLE FOR SELECT FREELANCE OPPORTUNITIES</h2>
        <ul className="mt-5">
          {socialData.map((item) => {
            return (
              <li className="my-4">
                <a href={item.socialLink}>{item.socialName}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="p-5 second_container footer-containers_sizing col-md-7 col-sm-12 d-flex flex-column justify-content-between">
        <div className="profile_container">
          <div className="image_frame">
            <img src={fetchStaticImage("/footer/profile-pic.jpg")} />
          </div>
        </div>
        <img
          src={fetchStaticImage("/footer/connect-with-me_crop.gif")}
          alt="Connect with me"
          className="typography"
        />
        <p className="text-end">VERSION 1.0</p>
      </div>
    </div>
  );
};

export default Footer;

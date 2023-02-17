import React from "react";
import "./Footer.scss";
import SocialData from "../../interfaces/SocialData";

const Footer = () => {
  const socialData: SocialData[] = [
    { socialName: "LinkedIn", socialIconPath: "/", socialLink: "/" },
    { socialName: "Github", socialIconPath: "/", socialLink: "/" },
    { socialName: "Leetcode", socialIconPath: "/", socialLink: "/" },
  ];

  return (
    <div className="border-blue row w-100 m-0" id="socials">
      <div className="py-5 ps-5 pe-3 socials_container footer-containers_sizing col-md-5 col-sm-12">
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
      <div className="p-5 second_container footer-containers_sizing col-md-7 col-sm-12">
        Div 2
      </div>
    </div>
  );
};

export default Footer;

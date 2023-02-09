import React from "react";
import SocialData from "../../interfaces/SocialData";

const Footer = () => {
  const socialData: SocialData[] = [
    { socialName: "LinkedIn", socialIconPath: "/", socialLink: "/" },
    { socialName: "Github", socialIconPath: "/", socialLink: "/" },
    { socialName: "Leetcode", socialIconPath: "/", socialLink: "/" },
  ];

  return (
    <div className="py-5 border-blue">
      <div className="container">
        <div className="inner-container border-red ">
          <h3>AVAILABLE FOR SELECT FREELANCE OPPORTUNITIES</h3>
          <ul>
            {socialData.map((item) => {
              return (
                <li>
                  <a href={item.socialLink}>{item.socialName}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

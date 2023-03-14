import React from "react";
import { Link } from "react-router-dom";

const footer = [
  {
    title: "About me",
    descriptions: ["About me", "Contact", "Job"],
  },
  {
    title: "Personnel recruitment",
    descriptions: ["Personnel recruitment, Find a job "],
  },
];

const Footer = () => {
  return (
    <div className="">
      {footer &&
        footer.map((item, i) => {
          return (
            <ul key={i}>
              {item.title}
              <Link to="#">
                <li>{item.descriptions}</li>
              </Link>
            </ul>
          );
        })}
    </div>
  );
};

export default Footer;

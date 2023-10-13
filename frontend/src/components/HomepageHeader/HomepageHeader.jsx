import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./HomepageHeader.css";
import { Row } from "reactstrap";
import { motion } from "framer-motion";
import logo from "../../assets/images/logo.jpg";
import { SocialIcon } from "react-social-icons";

const whileTap = {
  tap: {
    scale: 1.2,
  },
  hover: {
    scale: 1.1,
  },
};

const nav__links = [
  {
    path: "/",
    display: "STRONA GŁÓWNA",
  },
  {
    path: "/shop",
    display: "NASZA FLOTA",
  },
  {
    path: "/voucher",
    display: "VOUCHER",
  },
  {
    path: "/faq",
    display: "FAQ",
  },
  {
    path: "/kontakt",
    display: "KONTAKT",
  },
  {
    path: "/login",
    display: "PANEL PRACOWNIKA",
  },
];

const HomepageHeader = () => {
  const location = useLocation();

  return (
    <div className="homepageHeader">
      <Row>
        <div className="nav__wrapper">
          <div className="logo">
            <img src={logo} alt="logo" />
            {/* <div>
                            <h1>Rent a car</h1>
                            <p>Online car renting service</p>
                        </div> */}
          </div>

          <div className="navigation">
            <ul className="menu">
              {nav__links.map((item, index) => (
                <li className="nav__item" key={index}>
                  <NavLink
                    to={item.path}
                    className={`nav__link ${
                      location.pathname === item.path
                        ? "active on-current-page"
                        : "not-active"
                    }`}
                    // exact
                  >
                    {item.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="nav__icons">
            <motion.div
              variants={whileTap}
              whileTap="tap"
              whileHover="hover"
              initial="initial"
              animate="animate"
            >
              <SocialIcon url="https://facebook.com" />
            </motion.div>
            <motion.div
              variants={whileTap}
              whileTap="tap"
              whileHover="hover"
              initial="initial"
              animate="animate"
            >
              <SocialIcon url="https://instagram.com" />
            </motion.div>
          </div>

          
        </div>
      </Row>
    </div>
  );
};

export default HomepageHeader;

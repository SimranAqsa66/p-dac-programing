import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export const Nav = () => {
  return (
    <div>
      <div className="main-cnt">
        <nav>
          <ul>
            <li>
              <Link to="./  ">
                <img
                  className="Content-Img"
                  // src="data:image/jpeg;base64,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"
                  src="https://www.flywheelstrategic.com/images/default-source/our-clients/client-logos---color/pdac-logo.png?sfvrsn=c57e6561_2"
                  // src="https://www.pdac.ca/images/default-source/1080-x-720/logo-pdac-2018-font-white.png?sfvrsn=9fa28798_4"
                  alt="image"
                />
              </Link>
            </li>

            <div className="Content-bar">
              <li>
                <Link className="content-A" to="/">
                  <i
                    style={{ margin: "5px", color: "#00000080" }}
                    class="fa fa-home"
                  ></i>
                  Home
                </Link>
              </li>
              <li>
                <Link className="content-A" to="/placement">
                  {/* <i class="far fa-handshake"></i>  */}
                  Placement
                </Link>
              </li>
              <li>
                <Link className="content-A" to="/service">
                  Services
                </Link>
              </li>
              <li>
                <Link className="content-A" to="technology">
                  Technologies
                </Link>
              </li>
              <li>
                <Link className="content-A" to="About">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="content-A" to="contact">
                  Contact Us
                </Link>
              </li>
            </div>
            <li>
              {/* <div className="contect">
                <a href="">
                  <i class="fas fa-phone-alt"></i> +91 7058657111
                </a>
              </div> */}
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <img src="/static/media/pickupbiz-banner-3.6afd24e3" alt="" />
      </div>
    </div>
  );
};

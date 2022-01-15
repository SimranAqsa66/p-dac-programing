import React from "react";
import "./Techonlogye.css";
import { DataImg } from "../../Service/DataImg";

import { TechonolgyItem } from "./TechonolgyItem";

const Technologypage = () => {
  return (
    <div>
      <div content-image>
        <img src="https://wallpaperaccess.com/full/4142231.jpg" alt="" />
      </div>
      <div className="content-Heading">
        <p>Technologies we expertise in</p>
      </div>
      <div className="Content-cardd-Id">
        {DataImg.map((item) => (
          <TechonolgyItem item={item} />
        ))}
      </div>
      <footer>Copyrights © 2022. All rights reserved by Pickupbiz <i class="fab fa-twitter-square"></i>  <i class="fab fa-instagram"></i>  <i class="fab fa-facebook-square"></i></footer>

    </div>
  );
};

export default Technologypage;

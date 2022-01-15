import React from "react";
import "./Placement.css";
import { Placedata } from "../../Service/Placedata";
import { Placementchild } from "./Placementchild";

export const Placement = () => {
  return (
    <div>
      <div>
        <h1 className="Content-head">Achievements</h1>
      </div>
      <div className="content-placement">
        {Placedata.map((item) => (
          <Placementchild item={item} />
        ))}
      </div>
      <footer>Copyrights © 2022. All rights reserved by Pickupbiz <i class="fab fa-twitter-square"></i>  <i class="fab fa-instagram"></i>  <i class="fab fa-facebook-square"></i></footer>

    </div>
  );
};

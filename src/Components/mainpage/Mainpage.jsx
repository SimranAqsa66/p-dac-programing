import React from "react";
import Service from "../Servic/Service";
import "./Main.css";

const Mainpage = () => {
  return (
    <div>
      <div className="title">
        <h1>
          Boost your Business <br />
          with PickupBiz
        </h1>
        <p>
          PickupBiz philosophy is to assure the highest quality <br />
          product, total client satisfaction, timely delivery of <br />
          solutions and the best quality.
        </p>
        <button>Get Start Now</button>``
      </div>
      <div className="main-img">
        <img src="https://wallpaperaccess.com/full/4142231.jpg" alt="image" />
      </div>
      <Service />
      <footer>Copyrights © 2022. All rights reserved by Pickupbiz <i class="fab fa-twitter-square"></i>  <i class="fab fa-instagram"></i>  <i class="fab fa-facebook-square"></i>
      </footer>

    </div>
  );
};

export default Mainpage;

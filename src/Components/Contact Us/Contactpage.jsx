import React from "react";
import { Button } from "react-bootstrap";
import { FaUserAlt } from "react-icons/fa";
import "./Contactpage.css"

  const Contactpage = () => {
    return (
      <div>

         <div>
             <h1 className="Title">Contact Us</h1>
        </div>

        <div className="Inputs">
        <FaUserAlt className="User"/>
          <input type="text" placeholder="Name" className="Name"/>
          <input type="email" placeholder="Email" className="Email" />
          <br />
          <br />
          <br />
          < input type="text" placeholder="Phone" className="Phone" />

          <br/>
          <br />
          <br />
          <div className="Msgs">
            <input className="Msg" placeholder="Message"/>
            </div>
        </div>

        <div>
          <Button className="Btn">Send Message</Button>
        </div>
        

        <div className="Add">
          <p className="Divs">Address <br />
            706, Peer Burhan Nagar, Nanded, <br />
            Maharashtra 431605</p>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <div className="Emails">
          <p className="Divs">Email <br />
          info@pickupbiz.com </p>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        
        <div className="Pho">
          <p className="Divs">Phone <br />
         +91 7058657111</p>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />

        <footer>Copyrights © 2022. All rights reserved by Pickupbiz <i class="fab fa-twitter-square"></i>  <i class="fab fa-instagram"></i>  <i class="fab fa-facebook-square"></i></footer>
    

        
    </div>
    
);
};

export default Contactpage;

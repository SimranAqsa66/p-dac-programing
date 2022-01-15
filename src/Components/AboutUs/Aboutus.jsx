import { Data } from "../../Service/Data";
import { AboutUsItem } from "../AboutUs/AboutUsItem";
import "./AboutUs.css";
import "./AboutUsItem.css";


const Aboutus = () => {
  return (
<div>
           <div>
               <h1 className="Title">Who We Are</h1>
        </div>
        
            <div>
          <p className="Heading-1">PickupBiz, providing elegant business solutions for brands across the globe. A team of dedicated developers and creative designers from India, thrives to provide best and affordable solutions in web development, mobile app development, UI/UX and logo designing for large businesses and Start-ups. We also provide on-demand white label services like Data mining, customized Ecommerce solutions and Start-up tech partners.
            
          <br />
          <br />
            
            <p>We are serving various domains of industry like Ed-Tech, Ecommerce, Healthcare, etc. At PickupBiz, we do a transparent business working with you to enhance your business, to give a rich experience and maintain a long-term relationship. We make it a top priority to build and maintain partnerships with distinguished international partners, to build and deliver tailored solutions to our customers. We aspire to touch the lives of millions of people, through information technology and listen to their challenges and ambitions. This enables us to create the products and services they need to serve their daily needs. The general purpose of PickupBiz is to develop and promote advanced information technologies for multi-user operation. As a leader in technology exploring, PickupBiz is committed to exporting quality software worldwide.
            </p>
            
            <br/>
            
            <p>
            PickupBiz business philosophy is to assure the highest quality product, total client satisfaction, timely delivery of solutions and the best quality/price ratio found in the industry. Our emphasis is on offering a high degree of product user friendliness through a positive, creative and focused company staff. Trust, Integrity and Teamwork are the values upon which we built our growth and success, and which we live and work by.
            </p>

            <br />
            

            <p>Our Mission:
              <br />
              Our mission is to provide the best fully tested products and solutions for our customers.
            </p>

            <p>Our Vision:
              <br />
             To be the biggest technology enabler for building the future of our customers.
            </p>
       </p>
        </div>
        <div className="service-main">
      <div className="padding"></div>
      <div className="ser-our">
        <p>Our Services</p>
      </div>
      <div>
        {Data.map((item) => (
          <AboutUsItem img={item.img} title={item.title} parag={item.parag} />
        ))}
      </div>
      </div>
         
        <footer>Copyrights © 2022. All rights reserved by Pickupbiz <i class="fab fa-twitter-square"></i>  <i class="fab fa-instagram"></i>  <i class="fab fa-facebook-square"></i></footer>
        
 
        </div>

  );
};

export default Aboutus;

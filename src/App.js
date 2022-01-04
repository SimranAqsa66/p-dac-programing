import './App.css';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Home } from './Components/Pages/Home';
// import { Courses } from './Components/Pages/Courses';
// import { Batches } from './Components/Pages/Batches';
// import { Achievers } from './Components/Pages/Achievers';
// import { Service } from './Components/Pages/Service';
// import { Contact } from './Components/Pages/Contact';
// import { About } from './Components/Pages/About';
// import { NavLib } from "react-navlib-pickupbiz";

import { Homepage } from './Components/Home/Homepage';
// import Navbar from './Components/Navigation/Navbar';
// import { Nav } from './Components/Nav/Nav';

function App() {
  // const links = [
  //   {
  //     title: "Home",
  //     icon: "fa fa-home",
  //     url: "/",
  //   },
  //   {
  //     title: "Courses",
  //     icon: "fa fa-phone-square",
  //     url: "/courses",
  //   },
  //   {
  //     title: "Batches",
  //     icon: "fa fa-cogs",
  //     url: "/batches",
  //   },
  //   {
  //     title: "Placement Achievers",
  //     icon: "fa fa-cogs",
  //     url: "/achievers",
  //   },
  //   {
  //     title: "Services",
  //     icon: "fa fa-cogs",
  //     url: "/services",
  //   },
  //   {
  //     title: "Contact Us",
  //     icon: "fa fa-cogs",
  //     url: "/contact",
  //   },
  //   {
  //     title: "About Us",
  //     icon: "fa fa-cogs",
  //     url: "/about",
  //   },
  // ];
  return (
//     <BrowserRouter>
//     <NavLib links={links} />
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/courses" element={<Courses />} />
//       <Route path="/batches" element={<Batches/>} />
//       <Route path="/achievers" element={<Achievers />} />
//       <Route path="/services" element={<Service />} />
//       <Route path="/contact" element={<Contact />} />
//       <Route path="/about" element={<About />} />
//     </Routes>
//   </BrowserRouter>
// );
    <div >
      {/* <Navbar />
      <Nav /> */}
      <Homepage />

    </div>
  );
}

export default App;

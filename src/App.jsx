import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Pages/Layout";
import MobileDev from "./Pages/Services/MobileDev";
import WebDev from "./Pages/Services/WebDev";
import CloudComputing from "./Pages/Services/CloudComputing";
import StaffAugmentation from "./Pages/Services/StaffAugmentation";
import Openings from "./Pages/Career/Openings";
import Home from "./Pages/Home";
import Internship from "./Pages/Career/Internship";
import LifeAtCompany from "./Pages/Career/LifeAtCompany";
import AboutUs from "./Pages/AboutUs";
import Clients from "./Pages/Clients";
import ContactUs from "./Pages/ContactUs";
import Login from "./Pages/Login";
import ForgotPassword from "./Pages/ForgotPassword";

function App() {
  return (
    <div>
      {/* <Layout /> */}

      {/* <div className="pt-28 px-10"> */}
      <Routes>

        {/* HOME PAGE */}
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/" element={<Layout />} />

        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/about" element={<AboutUs />} />

        <Route path="/service/mobile-development" element={<MobileDev />} />
        <Route path="/service/web-development" element={<WebDev />} />
        <Route path="/service/cloud-computing" element={<CloudComputing />} />
        <Route path="/service/staff-augmentation" element={<StaffAugmentation />} />

        <Route path="/career/openings" element={<Openings />} />
        <Route path="/career/internship" element={<Internship />} />
        <Route path="/career/life-at-company" element={<LifeAtCompany />} />

        <Route path="/contact" element={<ContactUs />} />
        <Route path="/clients" element={<Clients />} />
      </Routes>
      {/* </div> */}
    </div>
  );
}

export default App;

import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import ContactUs from "./components/Contact Us/ContactUs";
import Blog from "./pages/Blog/Blog";
import AboutUs from "./components/About Us/AboutUs";
import Services from "./components/Services/Services";
import AboutUs1 from "./pages/AboutUs1/AboutUs1";
import MoreServices from "./pages/MoreServices/MoreServices";
import Footer from "./components/Footer/Footer";
import ButtonsForSigning from "./pages/Signing/ButtonsForSigning/ButtonsForSigning";
import SigninPage from "./pages/Signing/SignIn/SignInPage";
import SignUpPage from "./pages/Signing/SignUp/SignUpPage";
import PatientDashboard from "./dashboard/Patient/PatientDashboard";
import Dashboard from "./dashboard/Doctor/Dashboard";

function App() {
  return (
    <>
      
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/aboutUs" element={<AboutUs1 />} />
          <Route path="/moreServices" element={<MoreServices />} />
          <Route path="/book-appointment" element={<ButtonsForSigning/>}/>
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/signup" element={<SignUpPage/>}/>
          <Route path="/dashboard" element={<PatientDashboard />} />
          <Route path="/doctor-dashboard" element={<Dashboard />} /> 
        </Routes>
        <Footer/>
      
    </>
  );
}

export default App;

import React from "react";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import Companies from "../components/companies/Companies";
import Value from "../components/value/Value";
import ContactUs from "../components/contactUs/ContactUs";
import GetStarted from "../components/GetStarted/GetStarted";
import Gallery from "../components/gallery/Gallery";
import Testimonials from "../components/testimonials/Testimonials";
import Footer from "../components/footer/Footer";
import Services from "../components/Services/Services";
import "../App.css";
import About from "../components/About/About";

const Home = () => {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <About />
      <Companies />
      <GetStarted />
      <Services />
      <Gallery />
      <GetStarted />
      <Value />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
};
export default Home;

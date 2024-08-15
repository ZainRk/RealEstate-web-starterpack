import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import "../components/Style/Style.css";
import "../components/GetStarted/GetStarted";
import GetStarted from "../components/GetStarted/GetStarted";
import ServiceSection from "../components/Services/Services";

const About = () => {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <h1 className="h1">About Awaholm Properites</h1>
      <div className="about-div">
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          Welcome to our real estate company! We are a team of dedicated
          professionals committed to helping you find your dream home or
          investment property. With years of experience in the industry, we have
          a deep understanding of the local market and can provide you with
          valuable insights and guidance throughout the entire process. Our
          mission is to make the real estate journey as smooth and stress-free
          as possible for our clients. We pride ourselves on our exceptional
          customer service, attention to detail, and unwavering commitment to
          your satisfaction.
        </p>
        <span className="vr"></span>
        <div className="imgs">
          <img src="./r1.png" alt="About Image 1" className="img3" />
          <img src="./r2.png" alt="About Image 2" className="img1" />
          <img src="./r3.png" alt="About Image 1" className="img2" />
        </div>
      </div>
      <ServiceSection />
      <div className="full">
        <div className="half">
          <h1>
            Your Trusted Real
            <br /> Estate Advisor
          </h1>
          <img src="./r2.png" alt="" width={20} />
          <img src="./r1.png" alt="" width={20} />
          <img src="./r2.png" alt="" width={20} />
          <img src="./r1.png" alt="" width={20} />
          <img src="./r2.png" alt="" width={20} />
          <img src="./r1.png" alt="" width={20} />
        </div>
        <div className="half">
          <p>
            Your most trusted real estate agent in Nigeria. Your most trusted
            real estate agent in Nigeria. Your most trusted real estate agent in
            Nigeria. Your most trusted real estate agent in Nigeria.
          </p>
          <div className="w-50">
            <p className="text">
              real estate is what we do for a living and we are so proud of
              ourselves and these makes us feel so blessed and renewed and all
              we can say is tha God is the greatest.
            </p>
            <img src="./r2.png" alt="" />
          </div>
        </div>
      </div>
      <div className="gts">
        <GetStarted />
      </div>
      <Footer />
    </div>
  );
};

export default About;

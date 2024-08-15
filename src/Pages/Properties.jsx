import React, { useState } from "react";
import Header from "../components/header/Header";
import "../components/Style/Style.css";
import "../App.css";
import data from "../TemplateData.json";
import GetStarted from "../components/GetStarted/GetStarted";
import Footer from "../components/footer/Footer";

const Properties = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="App">
      <Header />
      <div className="templateContainer">
        <div className="searchInput_Container">
          <input
            type="text"
            placeholder="Search..."
            id="searchInput"
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>
        <div className="template_Container">
          <div className="template_grid">
            {data
              .filter((val) => {
                if (searchTerm === "") {
                  return val;
                } else if (
                  val.title.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((val) => {
                return (
                  <div className="template" key={val.id}>
                    <img src={val.image} alt="" />
                    <h3>{val.title}</h3>
                    <p className="price">${val.price}</p>
                  </div>
                );
              })}
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

export default Properties;

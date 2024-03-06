import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import './App.css'
import Companies from "./components/Companies/Companies";
import Residencies from "./components/Residencies/Residencies";
import Mission from "./components/Mission/Mission";
import Services from "./components/Services/Services";
import Mission_Accordion from "./components/Accordions/Mission_Accordion";
import About from "./components/About/About";
import Team from "./components/Team/Team";


function App() {
  return (
    <div className="App">
      
      <div>
      <div className="white-gradient"/>
      <Header/>
      <Hero/>
      </div>
      <div className="app_background">
      <Companies/>
       <Residencies/>
       <Team/>
      <About/>
      {/*<Mission/>
      <Services/> */}
    </div>
  </div>
  );
}

export default App;

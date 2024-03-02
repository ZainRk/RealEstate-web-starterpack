import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import './App.css'
import Companies from "./components/Companies/Companies";
import Residencies from "./components/Residenicies/Residencies";
import Mission from "./components/Mission/Mission";
import Services from "./components/Services/Services";



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
      <Mission/>
      <Services/>
    </div>
  </div>
  );
}

export default App;

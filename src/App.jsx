import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import './App.css'
import Companies from "./components/Companies/Companies";
import Residencies from "./components/Residenicies/Residencies";
import Mission from "./components/Mission/Mission";



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
    </div>
  </div>
  );
}

export default App;

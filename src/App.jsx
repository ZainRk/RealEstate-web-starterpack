import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Properties from "./Pages/Properties";
import Nopage from "./Pages/Nopage";
import Preloader from "./components/Preloader/Preloader";
import About from "./Pages/About";
const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay or fetch data
    setTimeout(() => {
      setLoading(false);
    }, 4000); // Replace with your actual loading time
  }, []);
  return (
    <div>
      {loading ? (
        <Preloader />
      ) : (
        // Your main app content
        <div>
          <Router>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/properties" element={<Properties />} />
              <Route path="*" element={<Nopage />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Router>
        </div>
      )}
    </div>
  );
};
export default App;

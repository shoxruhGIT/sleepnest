import React from "react";
import { About, Footer, MainApp, Navbar } from "./components";
import { Route, Routes } from "react-router-dom";
import Collection from "./components/Collection";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

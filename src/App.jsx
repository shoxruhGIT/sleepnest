import React from "react";
import {
  About,
  Contact,
  Footer,
  MainApp,
  Navbar,
  WinterCollectionItem,
} from "./components";
import { Route, Routes } from "react-router-dom";
import Collection from "./components/Collection";
import { ToastContainer } from "react-toastify";
import Wishlist from "./components/Wishlist";
const App = () => {
  return (
    <div>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<WinterCollectionItem />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

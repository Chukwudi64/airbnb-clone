import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import SearchPage from "./SearchPage";



function App() {
  return (
    //BEM
    <div className="app">
      <Router>
        <Header />

          <Routes>
            <Route path="/search" element={<SearchPage />} />
            <Route path="/" element={<Home />} />
          </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchPage from "./SearchPage";

function App() {
  return (
    //BEM
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route path="/search" element={<SearchPage />} />

          <Route path="/" element={<Home />} />
        </Routes>

        <Footer />
      </Router>

      {/*Banner*/}
      {/* Home */}
      {/*Search*/}
      {/*Cards*/}
      {/*Footer*/}

      {/*SearchPage*/}
      {/*...*/}
    </div>
  );
}

export default App;

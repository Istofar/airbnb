import React from "react";
import "./App.css";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    //BEM
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Home />

          <SearchPage />
        </Switch>
        <Footer />
      </Router>

      {/* Home */}
      {/*Banner*/}
      {/*Search*/}

      {/*Cards*/}
      {/*Footer*/}

      {/*SearchPage*/}
      {/*...*/}
    </div>
  );
}

export default App;

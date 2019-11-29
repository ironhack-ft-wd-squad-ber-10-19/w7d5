import React from "react";
import Navbar from "./Navbar";
import CountryList from "./CountryList";
import CountryDetail from "./CountryDetail";
import { Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <CountryList />

          <Route exact path="/:cca3" component={CountryDetail} />
        </div>
      </div>
    </div>
  );
}

export default App;

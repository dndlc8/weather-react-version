import React from "react";
import "./Weather.css";
import Header from "./Header";
import Current from "./Current";
import Forecast from "./Forecast";
import Footer from "./Footer";


export default function Weather() {
  return (
    <div className="Weather">
      <Header />
      <div className = "container">
      <Current />
      <Forecast />
      <p>Have A Wonderful Day!</p>
      <Footer />
 </div>
    </div>
  );
}
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Forecast.css";
import Overcast from "./weather_images/weather_symbols/overcast.png";
import Sunny from "./weather_images/weather_symbols/sunny.png";
import SunnyClouds from "./weather_images/weather_symbols/sunny_to_cloudy.png";


  export default function Forecast() {
  return (
    <section className="weekly">
      <div className="row">
        <img className="weeklySymbols figureImg col-2" src={Sunny} alt="" />
        <div className="day col">
          <span className="dayName tomorrow">Tuesday</span>
          <br />
          <span className="description">Sunny</span>
        </div>
        <div className="hi col">
          <span className="hiTemp">93</span>°F
        </div>
        <div className="low col">
          <span className="lowTemp">64</span>°F
        </div>
        <div className="descSm">Sunny</div>
      </div>
      <div className="row">
        <img className="weeklySymbols col-2" src={Sunny} alt="" />
        <div className="day col">
          <span className="dayName day-three">Wednesday</span>
          <br />
          <span className="description">Sunny</span>
        </div>
        <div className="hi col">
          <span className="hiTemp">93</span>°F
        </div>
        <div className="low col">
          <span className="lowTemp">66</span>°F
        </div>
        <div className="descSm">Sunny</div>
      </div>
      <div className="row">
        <img className="weeklySymbols col-2" src={SunnyClouds} alt="" />
        <div className="day col">
          <span className="dayName dayFour">Thursday</span>
          <br />
          <span className="description">Sunny</span>
        </div>
        <div className="hi col">
          <span className="hiTemp">94</span>°F
        </div>
        <div className="low col">
          <span className="lowTemp">66</span>°F
        </div>
        <div className="descSm">Sunny</div>
      </div>
      <div className="row">
        <img className="weeklySymbols col-2" src={SunnyClouds} alt="" />
        <div className="day col">
          <span className="dayName dayFive">Friday</span>
          <br />
          <span className="description">Sunny</span>
        </div>
        <div className="hi col">
          <span className="hiTemp">94</span>°F
        </div>
        <div className="low col">
          <span className="lowTemp">66</span>°F
        </div>
        <div className="descSm">Sunny</div>
      </div>
      <div className="row">
        <img className="weeklySymbols col-2" src={SunnyClouds} alt="" />
        <div className="day col">
          <span className="dayName daySix">Saturday</span>
          <br />
          <span className="description">Sunny</span>
        </div>
        <div className="hi col">
          <span className="hiTemp">89</span>°F
        </div>
        <div className="low col">
          <span className="lowTemp">60</span>°F
        </div>
        <div className="descSm">Sunny</div>
      </div>
      <div className="row">
        <img className="weeklySymbols col-2" src={Overcast} alt="" />
        <div className="day col">
          <span className="dayName daySeven">Sunday</span> <br />
          <span className="description">Sunny</span>
        </div>
        <div className="hi col">
          <span className="hiTemp">82</span>°F
        </div>
        <div className="low col">
          <span className="lowTemp">57</span>°F
        </div>
        <div className="descSm">Sunny</div>
      </div>
    </section>
  );
}

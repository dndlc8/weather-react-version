import React from "react";
import "./Current.css";
import Overcast from "./weather_images/weather_symbols/overcast.png";

export default function Current() {
  return (
    <div className="container">
      <div className="current">
        <div className="weatherContainer">
          <div>
            <h2 className="cityName">Currently, Where You Are:</h2>
            <h3>Monday 9/20/2020 18:08</h3>
            <article className="col">
              <span className="temp">90</span>
              <a className="measurement farenheit" href="/">
                °F|
              </a>
              <a className="measurement celsius" href="/">
                °C
              </a>
            </article>
            <div className="currentTemps col-12">
              <span className="currentTempsFont">Hi: </span>
              <span className="currentHi">90</span>
              <br />
              <span className="currentTempsFont">Low: </span>
              <span className="currentLow">60</span>
              <br />
              <span className="currentTempsFont">
                Humidity:
                <span className="currentHumidity">10</span> %
              </span>
              <br />
              <span className="currentTempsFont">
                {" "}
                Wind Speed:
                <span className="windSpeed">10</span> mph
              </span>
            </div>
          </div>
          <div>
            <img className="mainImage" src={Overcast} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

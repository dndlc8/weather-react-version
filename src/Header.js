import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <form>
        <input type="text" placeholder="🔍 Search Location" autoFocus="on" />
        <input
          type="text"
          placeholder="Two Letter Country Code"
          autoFocus="on"
        />
        <input type="submit" className="btn btn-primary" value="Search" />
        <input type="submit" className="btn btn-info" value="Current" />
      </form>

      <h1>Los Angeles</h1>
      <h2>
        Monday September 20, 2020
        <br />
        18:08
      </h2>
    </div>
  );
}
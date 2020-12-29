import React from "react";
import "./TempConversion.css";

export default function TempConversion() {
  return (
    <div className="TempConversion">
      <li>
        <a href="/" id="select-celsius" className="active">
          °C
        </a>{" "}
        /{" "}
        <a href="/" id="select-farenheit">
          °F
        </a>
      </li>
    </div>
  );
}

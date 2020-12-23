import React from "react";
import "./Tagline.css";

export default function Tagline() {
  return (
    <div className="tagline">
      <p>
        <a href="https://github.com/nicquiggin/weather-app" target="_blank">
          {" "}
          Open-source code
        </a>{" "}
        by Nic Quiggin
      </p>
    </div>
  );
}

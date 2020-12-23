import React from "react";
import "./Tagline.css";

export default function Tagline() {
  return (
    <div className="tagline">
      <p>
        <a href="https://github.com/nicquiggin/weather-app-react" target="_blank" rel="noreferrer">
          {" "}
          Open-source code
        </a>{" "}
        by <a href="https://www.linkedin.com/in/nicolaquiggin/" target="_blank" rel="noreferrer">Nic Quiggin</a>
      </p>
    </div>
  );
}

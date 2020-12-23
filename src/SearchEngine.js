import React from "react";
import "./SearchEngine.css";

export default function SearchEngine() {
  return (
    <div className="search-engine">
      <form>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search location"
            id="location-input"
            autoComplete="off"
            autoFocus="on"
          />
          <div className="input-group-append">
            <button className="btn btn-secondary" type="button">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
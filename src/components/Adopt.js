import React from "react";
import "./Adopt.css";

export default class Adopt extends React.Component {
  onSubmitSearch = e => {
    e.preventDefault();
    console.log("adopt city test");
  };

  render() {
    return (
      <div className="adopt-area">
        <div>
          <h2>Adopt</h2>
        </div>
        <div className="adopt-title">
          <p>Search for local adoption agencies below</p>
        </div>
        <div>
          <form className="city-search-form" onSubmit={this.onSubmitSearch}>
            <label id="city-label" htmlFor="city">
              City:
            </label>
            <input type="text" id="city" name="name" />
            <button id="city-search-button">Search</button>
          </form>
        </div>
      </div>
    );
  }
}

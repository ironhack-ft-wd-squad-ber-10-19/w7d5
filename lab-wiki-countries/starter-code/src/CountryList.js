import React from "react";
import { NavLink } from "react-router-dom";
import countriesJSON from "./countries.json";

class CountryList extends React.Component {
  state = {
    countries: countriesJSON
  };

  render() {
    console.log(this.state);
    return (
      <div
        className="col-5"
        style={{
          maxHeight: "90vh",
          overflow: "scroll"
        }}
      >
        <div className="list-group">
          {this.state.countries.map(country => {
            return (
              // NavLink adds the `active` class to a selected Link
              <NavLink
                className="list-group-item list-group-item-action"
                to={`/${country.cca3}`}
                key={country.cca3}
              >
                {country.flag} {country.name.common}
              </NavLink>
            );
          })}
        </div>
      </div>
    );
  }
}

export default CountryList;

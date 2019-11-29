import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

class CountryList extends React.Component {
  state = {
    countries: []
  };

  componentDidMount() {
    console.log("DID MOUNT");
    axios
      .get("https://countries.tech-savvy.tech/countries")
      .then(response => {
        console.log(response);
        this.setState({
          countries: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    console.log("RENDER", this.state);

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

import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class CountryDetail extends React.Component {
  state = {
    country: null,
    borders: []
  };

  getCountryData() {
    console.log("GET COUNTRY DATA");
    axios
      .get("https://countries.tech-savvy.tech/countries")
      .then(response => {
        const countries = response.data;

        const findCountry = cca3 => {
          return countries.find(country => {
            if (country.cca3 === cca3) return true;
          });
        };

        const props = this.props;

        const country = findCountry(props.match.params.cca3);

        const borders = country.borders.map(findCountry);

        this.setState({ country: country, borders: borders });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.getCountryData();
  }

  componentDidUpdate(prevProps) {
    console.log("PREVPROPS: ", prevProps);
    console.log("CURRENT PROPS: ", this.props);
    // if (prevProps.match.params.cca3 !== this.props.match.params.cca3) {
    if (prevProps !== this.props) {
      this.getCountryData();
    }
  }

  render() {
    if (this.state.country === null) {
      return <div />;
    }

    const country = this.state.country;
    const borders = this.state.borders;

    // const { country, borders } = this.state;

    return (
      <div className="col-7">
        <h1>{country.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: "30%" }}>Capital</td>
              <td>{country.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {country.area} km
                <sup>2</sup>
              </td>
            </tr>
            {borders.length > 0 && (
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    {borders.map(border => {
                      return (
                        <li key={border.cca3}>
                          <Link to={`/${border.cca3}`}>
                            {border.name.common}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CountryDetail;

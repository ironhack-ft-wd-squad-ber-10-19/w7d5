import React from "react";
import { Link } from "react-router-dom";
import countriesJSON from "./countries.json";

const CountryDetail = props => {
  const findCountry = cca3 => {
    return countriesJSON.find(country => {
      if (country.cca3 === cca3) return true;
    });
  };

  const country = findCountry(props.match.params.cca3);

  const borders = country.borders.map(findCountry);

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
                        <Link to={`/${border.cca3}`}>{border.name.common}</Link>
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
};

export default CountryDetail;

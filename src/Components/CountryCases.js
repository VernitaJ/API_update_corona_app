import React from "react";
import { Link } from "react-router-dom";

const CountryCases = (props) => {
  return (
    <div className="container">
      <table>
        <thead>
          <tr className="cases-table__row">
            <th className="cases-table__column-heading">
              <button
                className="sort-button"
                onClick={() => props.sortBy("country")}
              >
                Countries
                <img
                  className="sort-button__svg"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/White_arrow_down.svg/1200px-White_arrow_down.svg.png"
                  alt="arrow"
                />
              </button>
            </th>
            <th className="cases-table__column-heading">
              <button
                className="sort-button"
                onClick={() => props.sortBy("cases")}
              >
                Total Cases
                <img
                  className="sort-button__svg"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/White_arrow_down.svg/1200px-White_arrow_down.svg.png"
                  alt="arrow"
                />
              </button>
            </th>
            <th className="cases-table__column-heading">
              <button
                className="sort-button"
                onClick={() => props.sortBy("deaths")}
              >
                Deceased
                <img
                  className="sort-button__svg"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/White_arrow_down.svg/1200px-White_arrow_down.svg.png"
                  alt="arrow"
                />
              </button>
            </th>
            <th className="cases-table__column-heading">
              <button
                className="sort-button"
                onClick={() => props.sortBy("todayCases")}
              >
                New Cases
                <img
                  className="sort-button__svg"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/White_arrow_down.svg/1200px-White_arrow_down.svg.png"
                  alt="arrow"
                />
              </button>
            </th>
            <th className="cases-table__column-heading">
              <button
                className="sort-button"
                onClick={() => props.sortBy("critical")}
              >
                Critical
                <img
                  className="sort-button__svg"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/White_arrow_down.svg/1200px-White_arrow_down.svg.png"
                  alt="arrow"
                />
              </button>
            </th>
            <th className="cases-table__column-heading">
              <button
                className="sort-button"
                onClick={() => props.sortBy("recovered")}
              >
                Recovered
                <img
                  className="sort-button__svg"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/White_arrow_down.svg/1200px-White_arrow_down.svg.png"
                  alt="arrow"
                />
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(props.stats).map((stat, key) => {
            return (
              <tr className="cases-table__row" key={key}>
                <td className="cases-table__column-country">
                  <Link
                    to={{
                      pathname: `/country/${stat[1].country}`,
                      state: { country: stat[1].country, cases: stat[1].cases }
                    }}
                  >
                    {stat[1].country}
                  </Link>
                </td>
                <td className="cases-table__column-cases" key={stat.key}>
                  {stat[1].cases.toLocaleString(navigator.language, {
                    minimumFractionDigits: 0
                  })}
                </td>
                <td className="cases-table__column-deceased" key={stat.key}>
                  {stat[1].deaths.toLocaleString(navigator.language, {
                    minimumFractionDigits: 0
                  })}
                </td>
                <td className="cases-table__column-newCases" key={stat.key}>
                  {stat[1].todayCases.toLocaleString(navigator.language, {
                    minimumFractionDigits: 0
                  })}
                </td>
                <td className="cases-table__column-critical" key={stat.key}>
                  {stat[1].critical.toLocaleString(navigator.language, {
                    minimumFractionDigits: 0
                  })}
                </td>
                <td className="cases-table__column-recovered" key={stat.key}>
                  {stat[1].recovered.toLocaleString(navigator.language, {
                    minimumFractionDigits: 0
                  })}
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td>
              <a
                href="https://w3techs.com/technologies/overview/javascript_library/all"
                target="_blank"
                rel="noopener noreferrer"
              >
                W3Techs
              </a>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default CountryCases;

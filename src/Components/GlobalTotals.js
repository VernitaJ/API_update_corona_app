import React from "react";
import { Cases } from "../State/use-backend";

const GlobalTotal = () => {
  const { data } = Cases();
  const stats = { ...data };

  // let totalCritical = 0;
  let totalDeaths = 0;
  let totalNewCases = 0;
  let totalRecoveries = 0;
  let totalCases = 0;
  let totalNewDeaths = 0;

  Object.entries(stats).map(stat => {
    // totalCritical += stat[1].critical;
    totalDeaths += stat[1].deaths;
    totalNewCases += stat[1].todayCases;
    totalRecoveries += stat[1].recovered;
    totalCases += stat[1].cases;
    totalNewDeaths += stat[1].todayDeaths;
    return totalNewDeaths;
  });

  return (
    <div className="home-view__total-row">
      <div className="home-view__total-container">
        <img
          className="total__div-image"
          src="https://image.flaticon.com/icons/svg/2585/2585234.svg"
          alt="icon"
        />
        <h3 className="total__info">
          {totalCases.toLocaleString(navigator.language, {
            minimumFractionDigits: 0
          })}
        </h3>
        <p className="total__info">All Global Cases</p>
      </div>
      {/* <div className="home-view__total-container">
        <h3 className="total__info">
          {totalCritical.toLocaleString(navigator.language, {
            minimumFractionDigits: 0
          })}
        </h3>
        <p className="total__info-critical">Total critical cases</p>
      </div> */}
      <div className="home-view__total-container">
        <img
          className="total__div-image"
          src="https://image.flaticon.com/icons/svg/2659/2659991.svg"
          alt="icon"
        />
        <h3 className="total__info">
          {totalDeaths.toLocaleString(navigator.language, {
            minimumFractionDigits: 0
          })}
        </h3>
        <p className="total__info">Global Deceased</p>
      </div>
      <div className="home-view__total-container">
        <img
          className="total__div-image"
          src="https://image.flaticon.com/icons/svg/616/616490.svg"
          alt="icon"
        />
        <h3 className="total__info">
          {totalRecoveries.toLocaleString(navigator.language, {
            minimumFractionDigits: 0
          })}
        </h3>
        <p className="total__info">Global Recoveries</p>
      </div>
      <div className="home-view__total-new-container">
        <img
          className="total__div-image"
          src="https://image.flaticon.com/icons/svg/2585/2585234.svg"
          alt="icon"
        />
        <h3 className="total__info">
          {totalNewCases.toLocaleString(navigator.language, {
            minimumFractionDigits: 0
          })}
        </h3>
        <p className="total__info">Global New Cases</p>
      </div>
      <div className="home-view__total-container">
        <img
          className="total__div-image"
          src="https://image.flaticon.com/icons/svg/2659/2659991.svg"
          alt="icon"
        />
        <h3 className="total__info">
          {totalNewDeaths.toLocaleString(navigator.language, {
            minimumFractionDigits: 0
          })}
        </h3>
        <p className="total__info">Global Deaths Today</p>
      </div>
    </div>
  );
};

export default GlobalTotal;

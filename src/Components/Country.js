import React from "react";

const Country = props => {
  return (
    <div className="container">
      <h2>{props.stat.country}</h2>
    </div>
  );
};

export default Country;

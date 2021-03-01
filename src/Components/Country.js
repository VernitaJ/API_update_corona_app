import React from "react";

const Country = (props) => {
  console.log("arrived", props);

  return (
    <div className="container">
      <h2>{props.location.state.country}</h2>
      <h4>{props.location.state.cases}</h4>
    </div>
  );
};

export default Country;

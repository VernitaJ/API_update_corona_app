import React, { useState, useEffect } from "react";
import Country from "../Components/Country";
import NewsColumn from "../Components/NewsColumn";
import { Cases } from "../State/use-backend";

class CountryView extends React.Component {
  state = {
    stat: null
  };

  componentDidMount() {
    const { country } = this.props.match.params;
    const { stat } = this.props.location.state;

    fetch(`https://corona.lmao.ninja/v3/covid-19/countries/${country}`).then(
      (stat) => {
        this.setState(() => ({ stat }));
      }
    );
  }

  render() {
    return <Country props={stat} />;
  }
}

export default CountryView;

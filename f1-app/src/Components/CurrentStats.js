import React from "react";

const CurrentStats = () => {
  var polePosition = "";
  async function getCurrentDrivers() {
    const response = await fetch("https://ergast.com/api/f1/2023/driverStandings.json");
    const data = await response.json();
    let currentDrivers = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    //console.log(currentDrivers);
    polePosition = currentDrivers[0].Driver.driverId;
  }
  console.log(polePosition);
  getCurrentDrivers();
  return (
    <div className="current-stats">
      <h2>Current Stats</h2>
      <ul>
        <ol>
          <p>Driver Standings</p>
          <li>{polePosition}</li>
          <li></li>
          <li></li>
        </ol>
        <ol>
          <p>Constructor Standings </p>
          <li>HAAS</li>
          <li></li>
          <li></li>
        </ol>
      </ul>
    </div>
  );
};

//let polePosition = getCurrentDrivers(0);
//getCurrentDrivers(1);
//getCurrentDrivers(2);

export default CurrentStats;

//useSTATe adn UseEffect for displaying api data on here. see bookmark for details

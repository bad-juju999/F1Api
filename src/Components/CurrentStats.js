import React, { Component, useEffect, useState } from "react";
//the polePosition var value needs to be albe to be accesed by the scope of the whole component for the render.

const CurrentStats = () => {
  var drivers = {};
  async function getCurrentDriverStandings() {
    let response = await fetch("https://ergast.com/api/f1/2023/driverStandings.json");
    let data = await response.json();
    let currentDrivers = await data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    drivers.polePosition = currentDrivers[0].Driver.driverId;

    //console.log("who is in first? " + polePosition);
    //console.log(currentDrivers[1].Driver.driverId);
  }

  getCurrentDriverStandings();
  let driver2 = "Alonso";
  let driver3 = "Norris";
  console.log(drivers.polePosition);

  //useEffect(() => {
  //console.log("testing: " + currentDrivers);
  //}, [currentDrivers]);

  //console.log("who is in first? " + polePosition);

  return (
    <div className="current-stats">
      <h2>Current Stats</h2>
      <ul>
        <ol>
          <p>Driver Standings</p>
          <li>{}</li> {/*polePosition var should be here*/}
          <li>{driver2}</li>
          <li>{driver3}</li>
        </ol>
        <ol>
          <p>Constructor Standings </p>
          <li>HAAS ,not really</li>
          <li></li>
          <li></li>
        </ol>
      </ul>
    </div>
  );
};

export default CurrentStats;

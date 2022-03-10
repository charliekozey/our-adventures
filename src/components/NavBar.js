import React from "react";
import NavCard from "./NavCard";

function NavBar({ tripsArray, selectTrip }) {
 
  const mapTripsArray = tripsArray.map((trip) => {
    return (
      <NavCard
        key={trip.id}
        name={trip.name}
        trip={trip}
        selectTrip={selectTrip}
      />
    );
  });
  return (
    <div className="scrollmenu"> 
      <div className="table"> 
        <ul id="horizontal-list"> 
          {mapTripsArray} 
        </ul>
      </div>
    </div>
  );
}

export default NavBar;

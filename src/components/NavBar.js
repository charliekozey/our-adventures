import React from "react";
import NavCard from "./NavCard";

function NavBar({ tripsArray}) {
 
  const mapTripsArray = tripsArray.map((trip) => {
    return (
      <NavCard
        name={trip.name}
      />
    );
  });
  return (
    <div className="scrollmenu"> 
      <div className="btn-group"> <button> {mapTripsArray} </button>   
      </div>
    </div>
  );
}

export default NavBar;

import React from "react";
import NavCard from "./NavCard";

function NavBar({ tripsArray }) {
  const mapTripArray = tripArray.map((trip) => {
    return (
    <TripCard name={trip.name} location={trip.location} image={trip.image} description={trip.description} />
    )
})
return (
    <div className="ui four column grid">
      <div className="row">
        {mapTripsArray}
      </div>
    </div>
  );
}

export default NavBar;

import React from "react";
import NavCard from "./NavCard";

function NavBar({ tripArray }) {

const mapTripArray = tripArray.map(trip => {
    return (
    <TripCard name={trip.name} location={trip.location} image={trip.image} description={trip.description} />
    )
})
return (
    <div className="ui four column grid">
      <div className="row">
        {mapTripsArray}
        Collection of all bots
      </div>
    </div>
  );
}


export default NavBar;
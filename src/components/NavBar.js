import React from "react";
import TripCard from "./TripCard";

function NavBar({ tripsArray }) {
  const mapTripsArray = tripsArray.map((trip) => {
    return (
      <TripCard
        name={trip.name}
        // location={trip.location}
        // image={trip.image}
        // description={trip.description}
      />
    );
  });
  return (
    <div className="mainNavigation">
      <nav
        className="mbp2160 mbp2162"
        aria-label="Main Navigation"
        data-testid="NavigationTrips">
        <ul className="mainList">
        <div>{mapTripsArray}</div>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;

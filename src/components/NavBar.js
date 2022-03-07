import React from "react";
import NavCard from "./NavCard";

function NavBar({ tripsArray }) {
  const mapTripArray = tripArray.map((trip) => {
    return (
      <TripCard
        name={trip.name}
        location={trip.location}
        image={trip.image}
        description={trip.description}
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
          <li className="mainLink" data-testid="mainLevel_0" touch="false">
            <div 
              className="static"
              role="button"
              id="trip-container">
              <div>{mapTripsArray}</div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;

import React from "react";
import { NavLink } from "react-router-dom";

function NavCard({ name, trip, selectTrip }) {

function handleClick() {
  selectTrip(trip);
}

  return (
    <li className="trips" >
      <NavLink to={`/tripCard/${trip.name}`}>
        <button onClick={handleClick}> {name} </button>
      </NavLink>
    </li>
  );
}

export default NavCard;

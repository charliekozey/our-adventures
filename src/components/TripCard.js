import React from "react";
import { Route } from "react-router-dom";

function TripCard({ displayedTrip }) {

    console.log(displayedTrip.image)

    return (
        <div className= "tripCardDisplay">
            <Route path={`/tripCard/${displayedTrip.name}`}>
                <div className= "container">
                    <h1>{displayedTrip.location}</h1>
                    <h3>{displayedTrip.name}</h3>
                    <img className="responsive" src={displayedTrip.image} alt="." />
                    <p>{displayedTrip.description}</p> 
                </div>
            </Route>
        </div>
        
    )
}

export default TripCard;
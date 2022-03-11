import React from "react";
import { Route } from "react-router-dom";

function TripCard({ displayedTrip }) {

    console.log(displayedTrip.image)

    return (

        <div className="tripCardDisplay">
            <Route path={`/tripCard/${displayedTrip.name}`}>
                <div className="container">
                    <h1 className="h1Card">{displayedTrip.location}</h1>
                    <img className="cardIMG" src={displayedTrip.image} alt="error" />
                    <div>
                        <p className="tripP">{displayedTrip.name} - {displayedTrip.description}</p>
                        {/* <h3 className="h3card">{displayedTrip.name}</h3> */}
                    </div>
                </div>
            </Route>
        </div>

    )
}

export default TripCard;
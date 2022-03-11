import React from "react";
import { Route, Switch } from "react-router-dom";
import TripCard from "./TripCard";
import NewForm from "./NewForm";
import Home from "./Home.js";


function TripPage({ addAdventure, displayedTrip }) {

    return (
        <Switch>
            <Route path={`/tripCard/${displayedTrip.name}`}>
                <TripCard displayedTrip={displayedTrip} />
            </Route>
            <Route path="/newForm">
                <NewForm addAdventure={addAdventure} />
            </Route>
            <Route exact path="/">
                <Home id="trip-container"/>
            </Route>
        </Switch>
    )
}

export default TripPage;
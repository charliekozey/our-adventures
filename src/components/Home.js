import React from "react";
import { NavLink } from "react-router-dom";

function Home() {

    return (
        <div class="trip-window">
            <h1 id="welcome">
                Welcome to Our Adventures!
            </h1>
            <h4 id="about">Check out our adventures by clicking the links above, or submit your own adventure to the collection.</h4>
            <button id="submit-button">
                <NavLink to="/newForm">
                    Add your adventure
                </NavLink>
            </button>
        </div>
    )
}

export default Home;
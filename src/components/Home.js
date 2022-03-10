import React from "react";
import { NavLink } from "react-router-dom";

function Home() {

    return (
        <>
            <h1>
                Welcome to Our Adventures!
            </h1>
            <p>Check out our adventures by clicking the links above, or submit your own adventure to the collection.</p>
            <button id="submit-button">
                <NavLink to="/newForm">
                    Add your adventure
                </NavLink>
            </button>
        </>
    )
}

export default Home;
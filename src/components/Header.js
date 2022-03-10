import React from "react";
import { Link } from "react-router-dom";

function Header() {

    return (
        <header>
            <h1 className="header-OurAdventures">
                <Link to="/">
                    🗺 Our Adventures 🗺
                    {/* <span className="logo" role="img">
                        🗺
                    </span> */}
                </Link>
            </h1>
        </header>
    )
}

export default Header;
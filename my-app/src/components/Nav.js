import React from "react";
import navLogo from "../images/airbnb-logo.png"

export default function Nav() {
    return (
        <nav>
            <img className="img-logo" src={navLogo} />
        </nav>
    )
}
import React from "react";
import imgHero from "../images/photo-grid.png"

export default function Hero() {
    return (
        <section className="section-hero"> 
            <img className="img-hero" src={imgHero} />
            <h1 className="header-hero">Online Experiences</h1>
            <p className="p-hero">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}
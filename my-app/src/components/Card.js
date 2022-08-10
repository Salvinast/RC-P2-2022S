import React from "react"
import star from "../images/star.png"

export default function Card(props) {
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }
    
    return (
        <section className="section-card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={require(`../images/${props.item.coverImg}`)} className="image-katie" />
            <div className="card--stats">
                <img src={star} className="image-star" />
                <span className="rating">{props.item.stats.rating}</span>
                <span className="review-count">({props.item.stats.reviewCount}) • </span>
                <span className="review-count">{props.item.location}</span>
            </div>
            <p className="header-card">{props.item.title}</p>
            <p className="price2"><span className="price">From ${props.item.price}</span> / person</p>
        </section>
    )
}








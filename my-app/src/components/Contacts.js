import React from "react";
import cat from "../images/mr-whiskerson.png"
import phoneIcon from "../images/phone-icon.png"
import mailIcon from "../images/mail-icon.png"


export default function Contacts({img, name, phone, mail}) {
   return (
       <div className="contact-card">
           <img src={img}/>
           <h3>{name}</h3>
           <div className="info-group">
               <img src={phoneIcon} />
               <p>{phone}</p>
           </div>
           <div className="info-group">
               <img src={mailIcon} />
               <p>{mail}</p>
           </div>
       </div>
   )
}
import React from "react";
import Image from "next/image";
import hostelBuilding from "../public/hostelBuilding.jpeg";
import Button from "./Button";

function HostelCard({name, address, review, distanceFromUniversity, id, rating, price }){
    return(
        // <div className="main-grid">
        //     <div className="hostel-image">
        //         {/* <img src={hostelBuilding} alt={name} /> */}
        //     </div>
        //     <div className="hostel-details">
        //         <h2>{name}</h2>
        //         <br />
        //         <small>{address}</small>
        //         <br />
        //         <div className="review-section">
        //         <span className="rating-box">{rating} ★</span>
        //         <small className="secondary-text">  {review}</small>
        //         </div>
        //         <br />
        //         <h3 className="price">
        //             ₹ {price}
        //         </h3>
        //         <small className="secondary-text">For 3 Sharing</small>
        //     </div>
        //     <div className="pricing-contact">
        //         <p className="distance">{distanceFromUniversity}</p>
        //         <div className="action">
        //             <button>View Details</button>
        //             <button>Contact</button>
        //         </div>
        //     </div>
        // </div>
        <div>
        <div className="main-grid">
        <div className="hostel-image">
            <Image className="building-image" src={hostelBuilding} alt={name} layout="responsive" width={350} height="200" />
        </div>
        <div className="hostel-details">
            <h2>{name}</h2>
            <br />
            <small>{address}</small>
            <br />
            <div className="review-section">
            <span className="rating-box">{rating} ★</span>
            <small className="secondary-text review-text">{review}</small>
            </div>
            <br />
            <h3 className="price">
                ₹ {price}
            </h3>
            <small className="secondary-text">For 3 Sharing</small>
            <div className="actions">
                <Button text={`View details`} variant="secondary button" link={`/pg/${id}`} />
                <Button text={`Contact`} variant="primary button" link={`#`} />
            </div>
        </div>
    </div>
        <p className="distance">{distanceFromUniversity}</p>
    </div>
        
    )
};

export default HostelCard;
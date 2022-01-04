import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";

function BusinessDetails() {
    const [business, setBusiness] = useState({});
    const businessId = useParams();

    useEffect(() => {
        fetch(
            `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${businessId.id}?locale=tr_TR`,
            {
                headers: {
                    Authorization: `Bearer NGmCbEa0-k94vR4niJeuZCyT6i7-C3bEatbQG627nJXKhnMqn2PNvQb-fqmcWX54oS3vh9L-MR3-uR3gAz9xrj-HP3lGPXBce7BpjbQxGY72HKLE8zBUwr0KzaWjYXYx`,
                },
            }
        ).then((response) => {
            return response.json();
        }).then(response => {
            setBusiness(response);
        })
    }, []);


    return (

        <div className="details">
            <div className="details__navbar">
                <Link to="/">
                    <p className="details__logo">YumyApp</p>
                </Link>
            </div>
            <div className="details__photo-container">
                <img src={business.image_url} alt="Görsel" />
            </div>
            <div className="details__business-info">
                <div className="details__business-header">
                    <h2>{business.name}</h2>
                </div>
                <div className="details__info">
                    <div className="details__address">
                        <p>Adres : {business.address1}</p>
                    </div>
                    <div className="details__rating">
                        <p>Değerlendirme Puanı : {business.rating}</p>
                    </div>
                    <div className="details__price">
                        <p>Fiyat : {business.price}</p>
                    </div>
                    <div className="details__phone">
                        <p>Telefon : {business.phone}</p>
                    </div>
                    <div className="details__review-count">
                        <p>İnceleme Sayısı : {business.reiew_count}</p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default BusinessDetails

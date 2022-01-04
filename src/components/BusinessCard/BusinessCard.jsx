import React from 'react'
import { Link } from 'react-router-dom'

function BusinessCard({ business }) {
    return (

        <div className="business">
            <Link to={`details/${business.id}`}>
                <div className="business__image">
                    <img src={business.image_url} alt="İşletme Fotoğrafı" />
                </div>
            </Link>
            <div className="business__information">
                <p className="business__header">{business.name}</p>
                <div className="business__address">
                    <p className="business__address-text">{business.location.address1}</p>
                </div>

            </div>
        </div>

    )
}

export default BusinessCard

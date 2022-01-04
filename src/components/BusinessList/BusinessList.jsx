import React from 'react'
import BusinessCard from '../BusinessCard/BusinessCard'


function BusinessList({results}) {
    
    return (
        <div className="business-list__container">
            {results.length > 0 && <h2 className="business-list__header">Restoranlar</h2>}
            <div className="business-list">
                {results.map((business) => (
                    <BusinessCard 
                    business={business} 
                    key={business.id}
                    />
                ))}
                
            </div>
            
            
        </div>
    )
}

export default BusinessList

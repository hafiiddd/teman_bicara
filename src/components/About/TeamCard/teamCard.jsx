import React from 'react';
import './teamcard.css';

const TeamCard = ({ image, name, title, animationClass }) => (
    <div className={`team-card-container ${animationClass} pb-4`}>
        <div
            className="team-card-image"
            style={{
                width: '200px',
                height: '200px',
                backgroundColor: 'black',
                borderRadius: '10px',
            }}
        >
            <img
                src={image}
                className="img-fluid object-fit-cover"
                alt={name}
                style={{ borderRadius: '10px', width: '100%', height: '100%' }}
            />
        </div>
        <h5 className="text-start primary-green pt-2" style={{ paddingLeft: '0rem', fontSize:'18px' }}>
            {name}
        </h5>
        <h6 className="text-start text-white" style={{ paddingLeft: '0rem', color: 'gray', fontSize:'13px' }}>
            {title}
        </h6>
    </div>
);

export default TeamCard;
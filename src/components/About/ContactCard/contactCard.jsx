import React from 'react';

const ContactCard = ({ image, title, subtitle, contact }) => {
    return (
        <div
            className="card1 card mb-4 mb-md-0"
            style={{
                width: '300px',
                height: '200px',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            }}
        >
            <div className="card-body">
                <div className="d-flex flex-row justify-content-start">
                    <img
                        src={image}
                        alt=""
                        style={{ scale: 1, marginRight: 'auto', marginLeft: '-3rem', marginTop: '-3rem' }}
                    />
                </div>
                <h5
                    className="card-title text-start pt-3"
                    style={{marginLeft: '-3rem' }}
                >
                    {title}
                </h5>
                <p
                    className="card-text text-start"
                    style={{ color: 'gray', fontSize: '12px', marginTop: '-10px', marginLeft: '-3rem' }}
                >
                    {subtitle}
                </p>
                <p
                    className="card-title text-start fw-semibold"
                    style={{ fontSize: '15px', marginTop: '-5px', marginLeft: '-3rem' }}
                >
                    {contact}
                </p>
            </div>
        </div>
    );
};

export default ContactCard;

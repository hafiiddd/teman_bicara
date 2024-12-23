import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './cardComponent.css';

const Card = ({ cardData }) => {
    return (
        <div className="col-4 mb-4 px-5">
            <div className="custom-card-border" style={{ height: '18rem' }}>
                <img 
                    src={"cardData.imgSrc"} 
                    className="card-img-top" 
                    alt={cardData.title} 
                />
                <div className="card-body">
                    <h5 className="card-title">{cardData.title}</h5>
                    <div className="text-end">
                        <Link 
                            to={`/ArtikelDetailPage/${cardData.id}`} 
                            className="custom-card-link"
                        >
                            Selengkapnya
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    cardData: PropTypes.shape({
        imgSrc: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    }).isRequired,
};

export default Card;

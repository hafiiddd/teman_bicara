import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './cardComponent.css';

const Card = ({ cardData }) => {
    const truncateText = (text, maxWords) => {
        const words = text.split(' ');
        if (text.length > maxWords) {
            return words.slice(0, maxWords).join(' ') + '...';
        }
        return text;
    };

    return (
        <div className="col-4 mb-4 px-5">
            <div className="custom-card-border" style={{ height: '18rem' }}>
                <img
                    src={"../../../../src/assets/" + cardData.imgSrc}
                    className="card-img-top"
                    alt={cardData.title}
                />
                <div className="card-body">
                    <div></div>
                    <h5 className="card-title">{cardData.title}</h5>
                    <p className='card-content'>{truncateText(cardData.content, 30)}</p>
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
        content: PropTypes.string.isRequired,
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    }).isRequired,
};

export default Card;

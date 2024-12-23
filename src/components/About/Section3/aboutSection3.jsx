import React, { useEffect, useState, useRef } from 'react';
import './aboutSection3.css';

const Section3 = () => {
    const [isVisible, setIsVisible] = useState([false, false, false]);
    const [ingatTemara1Visible, setIngatTemara1Visible] = useState(false);
    const [ingatTemara2Visible, setIngatTemara2Visible] = useState(false);
    const cardsRef = useRef([]);

    const cards = [
        {
            icon: "../../../../src/assets/happiness.png",
            title: "Kesehatan Mental Terjaga",
            description:
                "Mental yang terjaga membuatmu lebih menikmati hidup dengan lebih baik, merasa lebih bahagia dan mampu menjalin hubungan dengan lebih baik.",
        },
        {
            icon: "../../../../src/assets/meditation.png",
            title: "Pikiran Tenang",
            description:
                "Pikiran yang tenang dapat membantumu untuk lebih mudah tertidur dan tidur lebih nyenyak lho! Kualitas tidur yang baik juga dapat mengurangi terjadinya stress.",
        },
        {
            icon: "../../../../src/assets/sport.png",
            title: "Tubuh Sehat",
            description:
                "Diawali dengan pikiran yang sehat dapat membuat tubuh sehat secara rohani, membantumu menghadapi tantangan hidup dengan lebih kuat dan tangguh.",
        },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setIsVisible((prev) => {
                            const updated = [...prev];
                            updated[index] = true;
                            return updated;
                        });
                    }
                });
            },
            {
                threshold: 0.3, 
            }
        );

        cardsRef.current.forEach((card) => observer.observe(card));

        return () => {
            observer.disconnect();
        };
    }, []);

    const observerIngatTemara = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                if (entry.target.id === 'ingat-temara-1') {
                    setIngatTemara1Visible(true);
                } else if (entry.target.id === 'ingat-temara-2') {
                    setIngatTemara2Visible(true);
                }
            }
        });
    };

    useEffect(() => {
        const temaraObserver = new IntersectionObserver(observerIngatTemara, { threshold: 0.3 });

        const ingatTemara1 = document.getElementById('ingat-temara-1');
        const ingatTemara2 = document.getElementById('ingat-temara-2');

        if (ingatTemara1) temaraObserver.observe(ingatTemara1);
        if (ingatTemara2) temaraObserver.observe(ingatTemara2);

        return () => {
            if (ingatTemara1) temaraObserver.unobserve(ingatTemara1);
            if (ingatTemara2) temaraObserver.unobserve(ingatTemara2);
        };
    }, []);

    return (
        <div className="container-fluid">
            <div className="d-flex flex-column text-center pt-5 mt-5">
                <h2 className="fw-bold text-black">Kenapa Teman Bicara?</h2>
                <div className="d-flex flex-row justify-content-center">
                    <h5 style={{ color: "grey" }}>
                        <span className="primary-green fw-bold">Teman Bicara</span> itu sangat penting lho di hidupmu!
                    </h5>
                </div>
            </div>

            <div
                className="d-flex flex-column mb-4 flex-md-row mb-md-0 text-center mt-5 pt-5 justify-content-evenly align-items-center"
                style={{ paddingRight: "5rem", paddingLeft: "5rem" }}
            >
                {cards.map((card, index) => (
                    <div
                        key={index}
                        ref={(el) => (cardsRef.current[index] = el)}
                        className={`title-card d-flex flex-column text-center justify-content-center ${isVisible[index] ? 'card-visible' : ''
                            } ${index === 0 && isVisible[index] ? 'card-left-to-right' : ''}
                        ${index === 1 && isVisible[index] ? 'card-bottom-to-top' : ''}
                        ${index === 2 && isVisible[index] ? 'card-right-to-left' : ''}`}
                        style={{ width: "280px" }}
                    >
                        <div className="d-flex flex-row text-start h-50">
                            <img
                                className="text-start"
                                style={{ paddingRight: "15px" }}
                                src={card.icon}
                                alt={card.title}
                            />
                            <p className="text-start fs-6 pt-4 fw-bold text-black">{card.title}</p>
                        </div>
                        <div>
                            <p className="text-start pt-3 text-black" style={{ fontSize: "small" }}>
                                {card.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>


            <div className="pt-5 mt-3 pb-5 mb-5">
                <div
                    id="ingat-temara-1"
                    className={`d-flex flex-row justify-content-md-start justify-content-center ${ingatTemara1Visible ? 'ingat-temara-1-visible' : ''}`}
                    style={{ height: "200px" }}
                >
                    <img
                        className="d-md-flex d-none"
                        src="../../../../src/assets/ingatTemara1.png"
                        alt="Ingat Temara 1"
                        style={{ scale: 1, paddingLeft: "10rem", height: "100%" }}
                    />
                    <div className="d-flex flex-column justify-content-center ms-3">
                        <h5 className="fw-bold px-sm-5 px-0 text-black text-start">Ingat kata Temara!</h5>
                        <div className="d-flex flex-row" style={{ paddingTop: "5px" }}>
                            <h6 className="px-sm-5 px-0" style={{ color: "grey" }}>
                                Care for your mind{" "}
                                <span className="primary-green fw-bold">anytime, anywhere!</span>
                            </h6>
                        </div>
                    </div>
                </div>

                <div
                    id="ingat-temara-2"
                    className={`d-flex flex-row justify-content-md-end justify-content-center ${ingatTemara2Visible ? 'ingat-temara-2-visible' : ''}`}
                    style={{ height: "200px", marginTop: "-60px" }}
                >
                    <div className="d-flex flex-column justify-content-center ms-3 text-end">
                        <h5 className="px-sm-5 px-0 fw-bold text-black">Jangan Sampai Lupa!</h5>
                        <div className="d-flex flex-row" style={{ paddingTop: "5px" }}>
                            <h6 className="px-sm-5 px-0" style={{ color: "grey" }}>
                                Care for your mind{" "}
                                <span className="primary-green fw-bold">anytime, anywhere!</span>
                            </h6>
                        </div>
                    </div>
                    <img
                        className="d-md-flex d-none"
                        src="../../../../src/assets/ingatTemara2.png"
                        alt="Ingat Temara 2"
                        style={{ scale: 1, paddingRight: "10rem" }}
                    />
                </div>
            </div>

        </div>
    );
};

export default Section3;


import React, { useEffect, useRef, useState } from 'react';
import './aboutSection1.css';

function Section1() {
    const [inView, setInView] = useState(false);

    const sectionRef = useRef(null); 
    const imgRef = useRef(null); 
    const textRef = useRef(null); 

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setInView(true);
                        observer.unobserve(entry.target); 
                    }
                });
            },
            {
                threshold: 0.3, 
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        if (imgRef.current) {
            observer.observe(imgRef.current);
        }
        if (textRef.current) {
            observer.observe(textRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
            if (imgRef.current) {
                observer.unobserve(imgRef.current);
            }
            if (textRef.current) {
                observer.unobserve(textRef.current);
            }
        };
    }, []);

    return (
        <div className="container-fluid">
            <div className="d-flex flex-row">
                <div
                    className={`d-flex flex-md-row flex-column align-items-center justify-md-content-start pt-4 mt-5 ${inView ? 'animate-bottom-to-top' : ''}`}
                    ref={sectionRef} 
                >
                    <div
                        className={`d-flex flex-row flex-md-column justify-content-center align-items-center ${inView ? 'animate-bottom-to-top' : ''}`}
                        ref={imgRef} 
                    >
                        <img
                            src="../../../../src/assets/temanBicara.png"
                            alt="Teman Bicara Logo"
                            style={{ scale: '0.5'}}
                        />
                    </div>

                    <div
                        className={`d-flex flex-column justify-content-center px-5 px-md-0 ${inView ? 'animate-bottom-to-top' : ''}`}
                        style={{ width: '30rem', marginRight: '10rem' }}
                        ref={textRef} 
                    >
                        <h2 className="text-center text-md-start text-black">
                            Hadirnya <span className="primary-green fw-bold">Teman Bicara</span>
                        </h2>
                        <p className="text-justify text-md-start text-black" style={{ fontSize: '15px' }}>
                            <span className="primary-green fw-bold">Teman Bicara </span>
                            memulai dengan keinginan sederhana untuk membantu mereka yang berjuang dengan masalah
                            pribadi menemukan dukungan yang mereka perlukan untuk sembuh dan berkembang.
                        </p>
                        <p className="text-justify text-md-start text-black" style={{ fontSize: '15px' }}>
                            <span className="primary-green fw-bold">Teman Bicara </span>
                            akan selalu tersedia untuk menemanimu!
                        </p>
                    </div>
                </div>

                <div className="d-none flex-column d-xxl-flex">
                    <img
                        className="img-fluid"
                        src="../../../../src/assets/mobilePreview.png"
                        alt="Mobile Preview 1"
                        style={{
                            width: '302px',
                            height: '489px',
                            opacity: '0.6',
                            marginBottom: '-6.4rem',
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Section1;

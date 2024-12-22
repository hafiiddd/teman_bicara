import './aboutSection2.css';
import TeamCard from '../TeamCard/teamcard';
import React, { useState, useEffect, useRef } from 'react';

function Section2() {
    const teamMembers = [
        { name: "Bintang", imgSrc: "../../../../src/assets/Bintang.jpg", title: "CEO" },
        { name: "Revan", imgSrc: "../../../../src/assets/Revan.jpg", title: "CEO" },
        { name: "Raga", imgSrc: "../../../../src/assets/Raga.jpg", title: "CEO" },
        { name: "Hafid", imgSrc: "../../../../src/assets/Hafid.jpg", title: "CEO" },
        { name: "Gina", imgSrc: "../../../../src/assets/Gina.jpg", title: "CEO" },
        { name: "Febry", imgSrc: "../../../../src/assets/Febry.jpg", title: "CEO" },
    ];

    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div className="container-fluid py-5" ref={sectionRef}>
            <div>
                <h2 className="text-center pb-5 text-white">
                    Tim <span className="primary-green fw-bold">Teman Bicara</span>
                </h2>
            </div>
            <div className="d-flex flex-column justify-content-center">
                <div
                    className={`d-flex flex-md-row flex-column justify-content-center align-items-center ${
                        isVisible ? 'animate-team' : ''
                    }`}
                    style={{ gap: '3rem' }}
                >
                    {teamMembers.slice(0, 4).map((member, index) => (
                        <TeamCard
                            key={index}
                            image={member.imgSrc}
                            name={member.name}
                            title={member.title}
                            animationClass={isVisible ? 'animate-bottom-to-top' : ''}
                        />
                    ))}
                </div>
                <div
                    className={`d-flex flex-md-row flex-column justify-content-center  align-items-center ${
                        isVisible ? 'animate-team' : ''
                    }`}
                    style={{ gap: '3rem' }}
                >
                    {teamMembers.slice(4).map((member, index) => (
                        <TeamCard
                            key={index + 4}
                            image={member.imgSrc}
                            name={member.name}
                            title={member.title}
                            animationClass={isVisible ? 'animate-bottom-to-top' : ''}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Section2;
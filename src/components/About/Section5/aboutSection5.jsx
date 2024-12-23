import ContactCard from "../ContactCard/contactCard";
import React, { useEffect, useState } from 'react';
import './aboutSection5.css';

function Section5() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        const section = document.getElementById('section5');
        if (section) observer.observe(section);

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <div id="section5" className="container-fluid">
                <div className="d-flex flex-column text-center pt-4 mt-5">
                    <h2 className="fw-bold text-black">Kontak</h2>
                    <div className="d-flex flex-row justify-content-center">
                        <h5 className="primary-green">
                            Ada Keluhan? Beritahu kami pengalamanmu!
                        </h5>
                    </div>
                    <div
                        className={`d-flex flex-column flex-md-row pb-5 mb-5 mt-5 justify-content-evenly align-items-center ${isVisible ? 'animate-cards' : ''
                            }`}
                    >
                        <ContactCard
                            image={'../../../../src/assets/gmail.png'}
                            title={'Bantuan'}
                            subtitle={'Kami ada untuk membantu'}
                            contact={'temanbicara@gmail.com'}
                        />
                        <ContactCard
                            image={'../../../../src/assets/instagram.png'}
                            title={'Kunjungi Kami'}
                            subtitle={'Informasi seputar teman bicara'}
                            contact={'temanbicaraofficial'}
                        />
                        <ContactCard
                            image={'../../../../src/assets/whatsapp.png'}
                            title={'Hubungi Kami'}
                            subtitle={'Senin - jumat (8am - 3pm)'}
                            contact={'+62 8143 5943 672'}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Section5;
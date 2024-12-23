import React from 'react';

const Section4 = () => {
    const faqItems = [
        {
            title: "Kenapa sih harus Teman Bicara?",
            description:
                "Kapan aja, dimana aja. Kamu dapat menggunakan layanan yang Teman Bicara sediakan untuk menemani keseharianmu!",
        },
        {
            title: "Di Teman Bicara bisa apa aja?",
            description:
                "Banyak hal! Konseling, Baca artikel, Buat jurnal, Asesmen harian, Temara si chatbot juga bisa nemenin kamu!",
        },
        {
            title: "Konseling itu ngapain aja?",
            description:
                "Bercerita tentang masalah yang kamu hadapi kepada psikolog/psikiater untuk membantumu mencarikan solusi terbaik!",
        },
        {
            title: "Biaya konseling mahal ga sih?",
            description:
                "Biaya bervariasi tergantung pada beberapa faktor, seperti pengalaman konseling, dan jenis konseling yang kamu pilih.",
        },
        {
            title: "Sesi konseling rahasia ga sih?",
            description:
                "Tentu! Sesi konseling bersifat rahasia. Informasi yang kamu bagikan akan dilindungi oleh kerahasiaan profesional.",
        },
        {
            title: "Hasil konseling lama ga ya?",
            description:
                "Hasil konseling akan bervariasi tergantung pada masalah yang dihadapi, kamu bisa saja langsung merasakan perubahannya!",
        },
    ];

    return (
        <div className="container-fluid">
            <div className="d-flex flex-column text-center pt-sm-5 pt-0 mt-sm-4 pb-5 mb-5">
                <h2 className="fw-bold text-white">FAQ</h2>
                <div className="d-flex flex-row justify-content-center pb-5 mb-1">
                    <h5 className="text-white">Bingung tapi gatau mau nanya siapa? cek disini aja!</h5>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-evenly">
                    <div className="d-flex flex-column">
                        {faqItems.slice(0, 3).map((item, index) => (
                            <div key={index} className="container-fluid" style={{ width: "30rem" }}>
                                <div className="d-flex flex-column pb-4">
                                    <div className="d-flex flex-row justify-content-start">
                                        <img
                                            className="align-items-center"
                                            src="../../../../src/assets/temanBicaraWhite.png"
                                            alt=""
                                            style={{ height: '50px', height: '50px' }}
                                        />
                                        <h5
                                            className="pt-2 text-center d-flex align-self-center"
                                            style={{ marginLeft: "1.55rem", marginTop: '-20px' }}
                                        >{item.title}</h5>
                                    </div>
                                    <h6
                                        className="text-start pt-2"
                                        style={{
                                            color: "gray",
                                            marginLeft: "4.7rem",
                                            marginTop: "-20px",
                                        }}
                                    >
                                        {item.description}
                                    </h6>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="d-flex flex-column">
                        {faqItems.slice(3).map((item, index) => (
                            <div key={index} className="container-fluid" style={{ width: "30rem" }}>
                                <div className="d-flex flex-column pb-4">
                                    <div className="d-flex flex-row justify-content-start">
                                        <img
                                            className="align-items-center"
                                            src="../../../../src/assets/temanBicaraWhite.png"
                                            alt=""
                                            style={{ height: '50px', height: '50px' }}
                                        />
                                        <h5
                                            className="pt-2 text-center d-flex align-self-center"
                                            style={{ marginLeft: "1.55rem", marginTop: '-20px' }}
                                        >{item.title}</h5>
                                    </div>
                                    <h6
                                        className="text-start pt-2"
                                        style={{
                                            color: "gray",
                                            marginLeft: "4.7rem",
                                            marginTop: "-20px",
                                        }}
                                    >
                                        {item.description}
                                    </h6>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section4;

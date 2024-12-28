import "../quiz/quizPage.css";

function QuizPage() {
  return (
    <>
      <div className="Quiz">
        <section className="section section-1">
          
            <div className="container d-flex justify-content-center p-3">
              <div className="row-md-8 d-flex justify-content-start flex-column w-100 pt-5">
                <div className="col-3 w-75 text-dark" style={{textAlign: 'start'}}>
                  <h2>Bagaimana kesehatan mentalmu akhir-akhir ini?</h2>
                </div>
                <div className={"col-5 align-text-top w-75 py-4"}
                 style={{ textAlign: 'justify', fontWeight: '500', fontSize: '20px'}} 
                 >
                  <p className="text-dark">
                    Bagaimana perasaan mu akhir-akhir ini. Apakah kamu belum
                    yakin perlu bantuan profesional atau tidak? Yuk, cari tahu
                    kondisi kesehatan mentalmu saat ini. Hanya dengan menjawab
                    10 pertanyaan singkat di quiz ini, kamu dapat menemukan
                    gambaran tentang kondisimu saat ini.
                  </p>
                </div>
                <div className="col-4">
                  <a
                    className="btn btn-quiz fw-bold my-5"
                    href="/Soal"
                  >
                    MULAI TES
                  </a>
                </div>
              </div>
              <div className="row-md-4">
                <img src="../../../../src/assets/Gambar-quiz.png" alt="quiz preview" />
              </div>
            </div>
        </section>
      </div>
    </>
  );
}
export default QuizPage;

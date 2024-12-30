import React from "react";

export default function ResultPage() {
  return (
    <>
      <div className="ResultPage">
        <section className="section section-1">
          <div className="container d-flex flex-row">
            <div className=" container-fluid d-flex flex-column container w-50 p-0">
              <h5 className="">Hasil kesehatan mental anda</h5>
              <div className="d-flex flex-column justify-content-center ">
                <div>
                  <h2 className="fw-bold text-center">SEHAT SECARA MENTAL</h2>
                </div>
                <div>
                  {/* <img style="scale: 0.67;" src="../../Assets/cuate.png" alt=""> */}
                </div>
              </div>
            </div>
            <div className="container-fluid">
              <div className="card card-result">
                <div className="card-body p-4">
                  <h2 className="text-center mb-4 text-white">
                    Kesejahteraan Emosional
                  </h2>

                  <div className="chart-container">
                    <div className="progress-label text-white">
                      Kesejahteraan Emosional 1
                    </div>
                    <div className="progress">
                      <div
                        className=" bg"
                        role="progressbar"
                        style={{width: "85%", height: "10%"}}
                        aria-valuenow="85"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>

                    <div className="progress-label text-white">
                      Kesejahteraan Emosional 2
                    </div>
                    <div className="progress">
                      <div
                        className="bg"
                        role="progressbar"
                        style={{width: "75%", height: "10%"}}
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>

                    <div className="progress-label text-white">
                      Kesejahteraan Emosional 3
                    </div>
                    <div className="progress">
                      <div
                        className="bg"
                        role="progressbar"
                        style={{width: "90%", height: "10%"}}
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>

                    <div className="progress-label text-white">
                      Kesejahteraan Emosional 4
                    </div>
                    <div className="progress">
                      <div
                        className="bg"
                        role="progressbar"
                        style={{width: "70%", height: "10%"}}
                        aria-valuenow="70"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>

                    <div className="progress-label text-white">
                      Kesejahteraan Emosional 5
                    </div>
                    <div className="progress">
                      <div
                        className="bg"
                        role="progressbar"
                        style={{width: "80%", height: "10%"}}
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>

                    <div className="progress-label text-white">
                      Kesejahteraan Emosional 6
                    </div>
                    <div className="progress">
                      <div
                        className="bg"
                        role="progressbar"
                        style={{width: "65%", height: "10%"}}
                        aria-valuenow="65"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

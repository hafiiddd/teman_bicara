import React, { useState } from "react";
import Soal from "../../components/quiz/soal";
import data from "../../components/quiz/dataSoal.json";
import No from "../../components/quiz/numberSoal";
import "../quiz/quizPage.css";

export default function QuizSoal() {
  const [dataSoal, setDataSoal] = useState(data);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [totalPoints, setTotalPoints] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleSelect = (id, option, points) => {
    setAnswers((prevAnswers) => {
      const updatedAnswers = {
        ...prevAnswers,
        [id]: { option, points },
      };

      const newTotalPoints = Object.values(updatedAnswers).reduce(
        (sum, answer) => sum + (answer.points || 0),
        0
      );

      setTotalPoints(newTotalPoints);
      return updatedAnswers;
    });

    handleAnswered(id);
  };

  const handleAnswered = (id) => {
    setSelectedAnswers((selected) => ({
      ...selected,
      [id]: true,
    }));
  };

  const nextQuestion = () => {
    if (currentIndex < dataSoal.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  const prevQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  const handleSelectQuestion = (id) => {
    const index = dataSoal.findIndex((soal) => soal.id === id);
    if (index !== -1) {
      setCurrentIndex(index);
    }
  };
  return (
    <>
      <div className="QuizSoal">
        <section className="section section-1">
          <div className="d-flex flex-row justify-content-between">
            <div className="d-flex flex-column p-5 align-content-start">
              <div
                className="px-0 d-flex flex-row"
                style={{ fontFamily: "poppins", textAlign: "start" }}
              >
                <h3 className="fw-bold me-2">Pertanyaan :</h3>
                <h3 className="counting">{currentIndex + 1}</h3>
              </div>
              <div>
                <Soal
                  question={data[currentIndex].question}
                  options={data[currentIndex].options}
                  id={data[currentIndex].id}
                  selectedAnswers={answers[data[currentIndex].id]}
                  onSelect={handleSelect}
                />
                <div className="px-0">
                  <div className=" d-flex flex-row justify-content-between px-3 my-3">
                    <button
                      className="rounded-2 d-inline-flex align-items-center "
                      id="prev-btn"
                      onClick={prevQuestion}
                      disabled={currentIndex === 0}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        width="16"
                        height="16"
                      >
                        <path d="M9.78 12.78a.75.75 0 0 1-1.06 0L4.47 8.53a.75.75 0 0 1 0-1.06l4.25-4.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L6.06 8l3.72 3.72a.75.75 0 0 1 0 1.06Z"></path>
                      </svg>
                      <span>Sebelumnya</span>
                    </button>

                    <button
                      className="rounded-2 d-inline-flex justify-content-end align-items-center "
                      id="next-btn"
                      onClick={nextQuestion}
                      disabled={currentIndex === dataSoal.length - 1}
                    >
                      <span>Selanjutnya</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        height="16"
                        style={{ color: "#35383f" }}
                      >
                        <path d="M6.22 3.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L9.94 8 6.22 4.28a.75.75 0 0 1 0-1.06Z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column">
              <div
                className="d-flex flex-column my-3"
                style={{ width: "300px" }}
              >
                <div className="d-flex row">
                  {data.map((data) => (
                    <No
                      id={data.id}
                      key={data.id}
                      isSelect={
                        currentIndex + 1 === data.id || selectedAnswers[data.id]
                      }
                      onSelect={(id) => {
                        handleSelectQuestion(id);
                      }}
                    />
                  ))}
                </div>
              </div>
              <div className="justify-content-center submit-quiz">
                {/* <button
                  className="btn-submit"
                  style={{ color: "white", background: "#7d944d" }}
                  formAction="/Result"
                >
                  Selesai
                </button> */}
                <a href="/Result" className="btn " style={{ color: "white", background: "#7d944d" }}>
                      Selesai
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

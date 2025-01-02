/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Soal from "../../components/quiz/soal";
import No from "../../components/quiz/numberSoal";
import "../quiz/quizPage.css";
import axios from "axios";
import { useUser } from "../../context/globalUserContext";
import { useNavigate } from 'react-router-dom';

export default function QuizSoal() {
  const navigate = useNavigate();
   const {user } = useUser();
  const [dataSoal, setDataSoal] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("TOKEN");
    if (!token) {
      setError("Token tidak ditemukan");
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      try {
        const soalResponse = await axios.get(
          "http://127.0.0.1:8000/api/v1/Quiz",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setDataSoal(soalResponse.data.data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getTotalPoints = () => {
    const quizAnswers = JSON.parse(localStorage.getItem('quizAnswers')) || {};
    if (typeof quizAnswers !== 'object' || quizAnswers === null) {
      console.error("Data quizAnswers tidak valid.");
      return 0;
    }
    const answers = Object.values(quizAnswers);
    const totalPoints = answers.reduce((acc, answer) => acc + answer.points, 0);
    return totalPoints;
  };

  const submit = async() =>{
    const totalPoints = getTotalPoints();
    const userId = user.id; 
    
    const data = {
      user_id: userId,
      user_point: totalPoints,
    };
  
    try {
      const response = await fetch("http://127.0.0.1:8000/api/v1/storeAnswer", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log('Hasil berhasil dikirim:', result);
      localStorage.removeItem('quizAnswers');
      console.log("Local storage 'quizAnswers' dihapus");
      navigate('/Result'); 
    } catch (error) {
      console.error('Gagal mengirim hasil:', error);
    }
  }
  
  const handleSelect = (id, option, points) => {
    const newAnswers = { ...selectedAnswers, [id]: { option, points } };
    setSelectedAnswers(newAnswers);
    localStorage.setItem("quizAnswers", JSON.stringify(newAnswers));
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    
    <div className="QuizSoal">
      {dataSoal.map((data,index)=>(console.log(data,index)))}
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
            <Soal
              question={dataSoal[currentIndex].question}
              options={dataSoal[currentIndex].answers}
              id={dataSoal[currentIndex].quiz_id} 
              selectedAnswers={selectedAnswers[dataSoal[currentIndex].quiz_id]} 
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
                  Sebelumnya
                </button>
                <button
                  className="rounded-2 d-inline-flex justify-content-end align-items-center "
                  id="next-btn"
                  onClick={nextQuestion}
                  disabled={currentIndex === dataSoal.length - 1}
                >
                  Selanjutnya
                </button>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column">
            <div className="d-flex flex-column my-3" style={{ width: "300px" }}>
              <div className="d-flex row">
                {dataSoal.map((data) => (
                  <No
                    id={data.quiz_id}
                    key={data.quiz_id}
                    isSelect={currentIndex + 1 === data.quiz_id}
                    onSelect={(id) => {
                      handleSelectQuestion(id);
                    }}
                    isAnswered={selectedAnswers[data.quiz_id]}
                  />
                ))}
              </div>
            </div>
            <div className="justify-content-center submit-quiz">
              <a
                // href="/Result"
                className="btn"
                style={{ color: "white", background: "#7d944d" }}
                onClick={submit}
              >
                Selesai
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

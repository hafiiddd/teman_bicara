/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "../quiz/quizPage.css";
import axios from "axios";

export default function ResultPage() {
  const [maxPoint, setMaxPoint] = useState();
  const [point, setPoint] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("");
  const [color, setColor] = useState("bg-success"); // Default color

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
        const [nilaiMaxResponse, pointResponse] = await Promise.all([
          axios.get("http://127.0.0.1:8000/api/v1/getMaxPoint", {
            headers: { Authorization: `Bearer ${token}` },
          }),
          axios.get("http://127.0.0.1:8000/api/v1/Result", {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ]);

        setMaxPoint(nilaiMaxResponse.data);
        const pointData = pointResponse.data.data;

        if (!pointData || pointData.length === 0) {
          setError("Data kosong");
          setLoading(false);
          return;
        }
        const latestData = pointData.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0];
        setPoint(latestData.user_point);

        setLoading(false);
      } catch (err) {
        setError("Error fetching data");
        setLoading(false);
      }
    };

    fetchData();
  }, []); 

  useEffect(() => {
    if (maxPoint && point) {
      const percentage = (point / maxPoint.maxPoints) * 100;
      if (percentage > 80) {
        setStatus("You have amazing mental health");
        setColor("success"); 
      } else if (percentage > 60) {
        setStatus("Your mental health is good");
        setColor("warning");
      } else if (percentage > 40) {
        setStatus("Take a rest for good mental health");
        setColor("info"); 
      } else if (percentage > 20) {
        setStatus("Need more attention");
        setColor("danger"); 
      } else {
        setStatus("Go for a consultation");
        setColor("secondary"); 
      }
    }
  }, [maxPoint, point]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const percentage = (point / maxPoint.maxPoints) * 100;

  return (
    <>
      <div className="ResultPage d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <section className="section section-1 w-75">
          <div className="container d-flex flex-row">
            <div className="container-fluid d-flex flex-column w-50 p-0">
              <h5 className="text-center mb-4">Hasil Kesehatan Mental Anda</h5>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <div>
                  <h2 className={`fw-bold text-center text-${color}`}>{status}</h2>
                </div>
              </div>
            </div>
            <div className="container-fluid">
              <div className="card-body p-4">
                <h2 className="text-center mb-4 text-dark">Kesejahteraan Emosional</h2>
                <div className="chart-container">
                  <div className="progress" style={{ height: '30px', borderRadius: '10px' }}>
                    <div
                      className={`progress-bar bg-${color}`}
                      style={{ width: `${percentage}%` }}
                      aria-valuenow={point}
                      aria-valuemin="0"
                      aria-valuemax={maxPoint.maxPoints}
                    >
                      {`${percentage.toFixed(2)}%`}
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

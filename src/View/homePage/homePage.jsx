import "./homePage.css";
import axios from 'axios';
import Card from '../../components/article/cardComponent';
import { useUser } from '../../context/globalUserContext';
import { useState, useEffect, useRef } from "react";

function HomePage() {
  const { user } = useUser();
  const [isLogin, setIsLogin] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const itemsPerPage = 6;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = articles.slice(indexOfFirstItem, indexOfLastItem);



  useEffect(() => {
    if (user === null) {
      setIsLogin('Silahkan login');
    } else {
      setIsLogin('');
    }
  }, [user]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
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


    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }

    };
  }, []);

  useEffect(() => {
    axios.get('http://localhost:8000/api/v1/article')
      .then(response => {
        setArticles(response.data.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Error fetching data');
        setLoading(false);
        console.log(err);
      });
  }, []);




  return (
    <div className="container-fluid homepage">
      <section className="section section-1">
        <h1>Section 1</h1>
        <p>{user ? `Hallo ${user.email}` : isLogin}</p>
      </section>
      <section className="section section-2">
        <h1>Section 2</h1>
        <p>This is the second section.</p>
      </section>

      <section className="section-3 py-5">
        <div className="container">
          <h2 className="section-title text-center mb-4">Top Articles</h2>
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <>
              <div className="row">
                {currentItems.slice(0,6).map((article) => (
                  <Card
                    key={article.artikel_id}
                    cardData={{
                      id: article.artikel_id,
                      title: article.title,
                      content: article.content,
                      imgSrc: article.image,
                    }}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <section className="section-4" ref={sectionRef}>
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-6 px-5">
              <h1 className="heading">
                One tap to safe place.
              </h1>
              <h1 className="heading">
                Download Teman Bicara now!
              </h1>
              <div className="d-flex">
                <img
                  className="store"
                  src="../../../../src/assets/playstore-container.png"
                  alt="Google Play"
                  style={{ width: "200px", marginRight: "1rem" }}
                />
                <img
                  className="store"
                  src="../../../../src/assets/appstore-container.png"
                  alt="App Store"
                  style={{ width: "200px" }}
                />
              </div>
            </div>
            <div className={`col-md-6 d-flex justify-content-center align-items-end image-container  ${isVisible ? "mob-bottom-to-top" : ""}`} ref={imgRef}>
              <img
                className={`mob-preview`}
                src="../../../../src/assets/mob-preview-home.png"
                alt="Mobile Preview"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;

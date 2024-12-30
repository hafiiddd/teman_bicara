import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../../components/article/cardComponent';
import "../artikel/artikelPage.css";


function ArtikelPage() {
  const [error, setError] = useState(null);
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 9;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = articles.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(articles.length / itemsPerPage);


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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="Artikel">
      <section className="section container py-5 section-1">

        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <>
            <div className="row">
              {currentItems.map((article) => (
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
      </section>
      <div className="pagination mt-4 d-flex justify-content-center py-2" >
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`btn mx-1 ${currentPage === index + 1 ? "btn-primary active-page" : "btn-secondary"
              }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ArtikelPage;

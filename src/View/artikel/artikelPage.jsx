import  { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../../components/article/cardComponent';
import "../artikel/artikelPage.css";


function ArtikelPage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    axios.get('http://localhost:8000/api/v1/get-artikel')
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

  return (
    <div className="Artikel">
      <section className="section section-1">
        <div className="row">
          {articles.map((article) => (
            <Card
              key={article.artikel_id}
              cardData={{
                id: article.artikel_id,
                title: article.title,
                imgSrc: article.image, 
              }}
            />
          ))}

        </div>
      </section>
    </div>
  );
}

export default ArtikelPage;

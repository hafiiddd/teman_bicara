import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "../artikel/artikelDetailPage.css";

function ArtikelDetailPage() {
    const { id } = useParams();
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/v1/article/${id}`)
            .then(response => {
                setArticle(response.data.data);
                setLoading(false);
            })
            .catch(err => {
                setError('Error fetching data');
                setLoading(false);
                console.log(err);
            });
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    const { title, content, image, user } = article || {};
    const userName = user ? user.name : 'Unknown Author';

    return (
        <div className="ArtikelDetail">
            <section className="section section-1">
                <div className="container mt-5">
                    <div className="row header">
                        <div className="col-md-8">
                            <h1 className="article-title" id="article-title">{title || 'Loading...'}</h1>
                            <div className="article-info">
                                <span id="article-date">Date: {article?.created_at}</span> <br />
                                <span className="author" id="article-author">Author: {userName}</span>
                            </div>
                            <div className="article-content mt-4" id="article-content">
                                <p>{content || 'Loading content...'}</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <img src={"../../../../src/assets/" + image || 'default-image.jpg'} alt="Article" className="article-image" id="article-image" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ArtikelDetailPage;

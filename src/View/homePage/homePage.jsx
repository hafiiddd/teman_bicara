import "./homePage.css";
import { useUser } from '../../context/globalUserContext';
import { useState, useEffect } from "react";

function HomePage() {
  const { user } = useUser();
  const [isLogin, setIsLogin] = useState('');

  useEffect(() => {
    if (user === null) {
      setIsLogin('Silahkan login');
    } else {
      setIsLogin('');
    }
  }, [user]);

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
      <section className="section section-3">
        <h1>Section 3</h1>
        <p>{`Here's the third section.`}</p>
      </section>
      <section className="section section-4">
        <h1>Section 4</h1>
        <p>This is the fourth and final section.</p>
      </section>
    </div>
  );
}

export default HomePage;

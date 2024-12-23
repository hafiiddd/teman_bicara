import "../about/aboutPage.css"
import {useEffect } from "react";
import Section1 from "../../components/About/Section1/aboutSection1";
import Section2 from "../../components/About/Section2/aboutSection2";
import Section3 from "../../components/About/Section3/aboutSection3";
import Section4 from "../../components/About/Section4/aboutSection4";
import Section5 from "../../components/About/Section5/aboutSection5";
import { useLocation } from "react-router-dom";

function AboutPage() {
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const scrollToClass = queryParams.get('section');

    if (scrollToClass) {
      const element = document.querySelector(`.${scrollToClass}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

    return (
      <>
        <div className="About">
          <section className="section section-1">
            <Section1/>
          </section>
          <section className="section section-2 bg-dark">
            <Section2/>
          </section>
          <section className="section section-3">
           <Section3/>
          </section>
          <section className="section section-4">
            <Section4/>
          </section>
          <section className="section section-5" >
            <Section5/>
          </section>
        </div>
      </>
    );
  }
export default AboutPage;
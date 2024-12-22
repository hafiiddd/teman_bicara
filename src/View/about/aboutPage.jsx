import "../about/aboutPage.css"
import Section1 from "../../components/About/Section1/aboutSection1";
import Section2 from "../../components/About/Section2/aboutSection2";
import Section3 from "../../components/About/Section3/aboutSection3";
import Section4 from "../../components/About/Section4/aboutSection4";
import Section5 from "../../components/About/Section5/aboutSection5";

function AboutPage() {
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
          <section className="section section-5">
            <Section5/>
          </section>
        </div>
      </>
    );
  }
export default AboutPage;
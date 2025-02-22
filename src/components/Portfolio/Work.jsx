import "./work.css";
import Works from "./Works";

const Work = () => {
  return (
    <section className="work section" id="portfolio">
      <h2 className="section__title">My Projects</h2>
      <span className="section__subtitle">Most recent featured works</span>

      <Works />
    </section>
  );
};

export default Work;

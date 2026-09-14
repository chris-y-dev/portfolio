import "./About.scss";
import "../../App.scss";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-copy">
            <p className="eyebrow">About</p>
            <h2 className="section-heading">
              Software engineer with a human-centered background.
            </h2>
            <p className="section-sub">
              I’m a software engineer with a foundation in paediatric music
              therapy, where I learned to listen deeply, adapt quickly, and
              create meaningful experiences for people with diverse needs.
            </p>
            <p className="section-sub">
              That same people-first mindset now shapes how I build
              software—whether I’m designing a product flow, improving a
              workflow, or solving technical problems with empathy and clarity.
            </p>
            <p className="section-sub">
              I enjoy turning complex problems into practical, user-focused
              solutions, and I’m especially interested in product engineering,
              cloud systems, and the intersection of technology with real-world
              impact.
            </p>
          </div>

          <div
            className="about-image-wrap"
            aria-label="Profile image placeholder"
          >
            <div className="about-image-slot">
              <span>Paste profile image here</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

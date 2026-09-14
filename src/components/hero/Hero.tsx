import { useEffect, useState } from "react";
import blueTailedBeeEater from "../../assets/images/hero-pics/blue-tailed-bee-eater.jpg";
import gangGangCockatoo from "../../assets/images/hero-pics/gang-gang-cockatoo.jpg";
import kookaburra from "../../assets/images/hero-pics/kookaburar.jpg";
import redBrowedFinch from "../../assets/images/hero-pics/red-browed-finch.jpg";
import redCappedRobin from "../../assets/images/hero-pics/red-capped-robin.jpg";
import whiteThroatedKingfisher from "../../assets/images/hero-pics/white-throated-kingfisher.jpg";
import "./Hero.scss";
import "../../App.scss";

const heroImages = [
  { src: blueTailedBeeEater, alt: "Blue-tailed bee-eater" },
  { src: gangGangCockatoo, alt: "Gang-gang cockatoo" },
  { src: kookaburra, alt: "Kookaburra" },
  { src: redBrowedFinch, alt: "Red-browed finch" },
  { src: redCappedRobin, alt: "Red-capped robin" },
  { src: whiteThroatedKingfisher, alt: "White-throated kingfisher" },
];

function shuffleImages() {
  return [...heroImages].sort(() => Math.random() - 0.5);
}

const Hero = () => {
  const nameTitle = "CHRIS Y.";
  const subheading = "SOFTWARE ENGINEER";
  const [imageSequence] = useState(shuffleImages);
  const [activeImage, setActiveImage] = useState(0);

  const stackGroups = [
    {
      label: "CORE",
      values: ["C#/.NET", "React", "TypeScript", "Python", "SQL"],
    },
    {
      label: "FRONTEND",
      values: ["React Redux", "Vue 3", "Angular", "HTML / CSS", "JavaScript"],
    },
    {
      label: "CLOUD",
      values: ["AWS", "Azure", "Docker", "Terraform", "CI/CD"],
    },
    {
      label: "TOOLS",
      values: ["Claude Code", "Copilot", "TeamCity", "SumoLogic", "New Relic"],
    },
  ];

  useEffect(() => {
    const rotation = window.setInterval(() => {
      setActiveImage(
        (currentImage) => (currentImage + 1) % imageSequence.length,
      );
    }, 10000);

    return () => window.clearInterval(rotation);
  }, [imageSequence.length]);

  return (
    <section className="hero-container" id="home">
      <div className="hero-inner">
        <div className="hero-content">
          <p className="eyebrow-small">Canberra, Australia</p>
          <h1 className="title" aria-label={nameTitle}>
            {nameTitle}
          </h1>
          <h3 className="subtitle" aria-label={subheading}>
            {subheading}
          </h3>
          <p className="hero-line">
            <span className="mt_font">Ex-Paediatric Music Therapist</span>{" "}
            turned <span className="swe_font">software engineer</span>, with
            experience across enterprise (Xero), startup, and small-business
            environments. At Xero, I work on online bill payment systems
            processing millions in monthly USD transactions, with a focus on
            data integrity, reliability, and observability at scale.
          </p>
          <p className="hero-line">
            Beyond payments, I've worked across security engineering, frontend
            delivery, and infrastructure ownership. I adapt quickly to new
            domains. Currently learning to integrate AI capabilities into my
            homelab, including LLM-powered chatbots and context-aware
            applications.
          </p>
          <div className="hero-stack-block" aria-label="Technology stack panel">
            <div className="stack-header">
              <span className="stack-label">stack</span>
              <span className="stack-dots">
                <i className="dot dot-green" />
                <i className="dot dot-amber" />
                <i className="dot dot-red" />
              </span>
            </div>
            <div className="ascii-field" aria-hidden="true">
              {stackGroups.map((group) => (
                <div className="stack-group" key={group.label}>
                  <span className="stack-group-label">{group.label}</span>
                  <span className="stack-group-values">
                    {group.values.join(" · ")}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#resume">
              Resume
            </a>
            <a
              className="btn"
              href="https://www.linkedin.com/in/chris-y-dev/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Bird photography">
          <figure className="hero-image-figure">
            <div className="hero-image-slot">
              <img
                src={imageSequence[activeImage].src}
                alt={imageSequence[activeImage].alt}
              />
            </div>
            <figcaption>
              Photos taken by me · {imageSequence[activeImage].alt}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;

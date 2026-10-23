import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

import heroImage from "./assets/hero.avif";
import philosophyImage from "./assets/philosophy.avif";
import gallery1 from "./assets/gallery1.avif";
import gallery2 from "./assets/gallery2.avif";
import gallery3 from "./assets/gallery3.avif";
import gallery4 from "./assets/gallery4.avif";
import teamImage from "./assets/team.jpg";

const PHONE_NUMBER = "+393494534182";
const PHONE_LINK = `tel:${PHONE_NUMBER}`;
const MAP_LINK =
  "https://www.google.it/maps/place/Eggy+Barber's+Square/@45.4657135,8.8807793,17z/data=!3m1!4b1!4m6!3m5!1s0x4786f1eb62ff4627:0x5ab8e7d3d4f0224c!8m2!3d45.4657098!4d8.8833542!16s%2Fg%2F11h0ch2w5k";
const INSTAGRAM_LINK = "https://www.instagram.com/eggybarberssquare/";

const services = [
  { number: "01", name: "Haircut", description: "Un taglio personalizzato, studiato sul viso e sul tuo stile.", price: "30€" },
  { number: "02", name: "Beard", description: "Modellatura e cura della barba con attenzione a ogni dettaglio.", price: "20€" },
  { number: "03", name: "Gentleman", description: "Taglio e barba, per un look curato in ogni particolare.", price: "45€" },
  { number: "04", name: "Luxury Treatment", description: "Un trattamento premium dedicato alla cura personale.", price: "50€" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-is-open", menuOpen);
    return () => document.body.classList.remove("menu-is-open");
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Navigazione principale">
        <a className="logo" href="#home" aria-label="Eggy Barber's Square, home" onClick={closeMenu}>
          <span className="logo-main">EGGY</span>
          <span className="logo-sub">BARBER'S SQUARE</span>
        </a>
        <button
          className={`menu-toggle${menuOpen ? " is-open" : ""}`}
          type="button"
          aria-label={menuOpen ? "Chiudi il menu" : "Apri il menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span /><span />
        </button>
        <div id="primary-navigation" className={`nav-panel${menuOpen ? " is-open" : ""}`}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#filosofia" onClick={closeMenu}>Filosofia</a>
          <a href="#servizi" onClick={closeMenu}>Servizi</a>
          <a href="#galleria" onClick={closeMenu}>Galleria</a>
          <a href="#contatti" onClick={closeMenu}>Contatti</a>
          <a className="cta nav-cta" href={PHONE_LINK} onClick={closeMenu}>Prenota <span aria-hidden="true">↗</span></a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero container" id="home">
      <div className="hero-content">
        <p className="eyebrow"><span className="eyebrow-line" /> BARBER SHOP · MAGENTA</p>
        <h1>Tradizione.<br />Precisione.<br /><em>Stile.</em></h1>
        <p className="hero-description">
          Un'esperienza barber premium dove la tecnica incontra la personalità.
          Il tuo stile, curato in ogni dettaglio.
        </p>
        <div className="hero-actions">
          <a href={PHONE_LINK} className="cta">Prenota un appuntamento <span aria-hidden="true">↗</span></a>
          <a href="#servizi" className="text-link">Scopri i servizi <span aria-hidden="true">↓</span></a>
        </div>
        <div className="hero-note"><span className="status-dot" /> UN APPROCCIO PERSONALE, UN RISULTATO TUO.</div>
      </div>
      <div className="hero-visual">
        <div className="hero-image-frame">
          <div className="hero-image">
            <img src={heroImage} alt="Atmosfera e dettagli di Eggy Barber's Square" fetchPriority="high" />
          </div>
          <span className="hero-outline" aria-hidden="true" />
        </div>
        <div className="hero-image-index"><span>01</span> / BARBER CULTURE</div>
      </div>
      <a className="scroll-cue" href="#filosofia" aria-label="Scorri alla sezione successiva">
        <span>SCOPRI EGGY</span><span className="scroll-cue-line" />
      </a>
    </section>
  );
}

function Philosophy() {
  return (
    <section className="philosophy section-pad reveal" id="filosofia">
      <div className="philosophy-media media-frame">
        <img src={philosophyImage} alt="Dettagli e atmosfera della barberia" loading="lazy" />
        <span className="media-caption">IL VALORE DELLA CURA</span>
      </div>
      <div className="philosophy-copy">
        <p className="eyebrow">01 — LA NOSTRA FILOSOFIA</p>
        <h2>L'arte<br />del <em>dettaglio.</em></h2>
        <p>
          Ogni taglio racconta qualcosa di chi lo porta. Da Eggy Barber's Square
          la tradizione barber incontra le tecniche contemporanee per dare forma
          a uno stile autentico, senza compromessi.
        </p>
        <a className="text-link" href="#servizi">Il nostro approccio <span aria-hidden="true">↘</span></a>
        <div className="philosophy-signature" aria-hidden="true">E.</div>
      </div>
    </section>
  );
}

function SectionHeading({ index, eyebrow, title, accent }) {
  return (
    <div className="section-heading reveal">
      <p className="eyebrow">{index} — {eyebrow}</p>
      <h2>{title} {accent && <em>{accent}</em>}</h2>
    </div>
  );
}

function Services() {
  return (
    <section className="services section-pad" id="servizi">
      <div className="container">
        <SectionHeading index="02" eyebrow="SERVIZI" title="La cura" accent="del dettaglio." />
        <div className="services-intro reveal">
          <p>Un servizio pensato per te, con attenzione alla tecnica e al risultato.</p>
          <span>SELEZIONE SERVIZI <span aria-hidden="true">↘</span></span>
        </div>
        <div className="services-list">
          {services.map((service) => (
            <article className="service-item reveal" key={service.number}>
              <span className="service-number">{service.number}</span>
              <div className="service-copy">
                <h3>{service.name}</h3>
                <p>{service.description}</p>
              </div>
              <strong className="service-price">{service.price}</strong>
              <a href={PHONE_LINK} className="service-arrow" aria-label={`Prenota ${service.name}`}>↗</a>
            </article>
          ))}
        </div>
        <p className="price-note">Per informazioni e appuntamenti, contattaci direttamente.</p>
      </div>
    </section>
  );
}

function Gallery() {
  const images = [
    { src: gallery1, alt: "Uno scorcio della barberia", className: "gallery-item gallery-item-tall", label: "01 / ATMOSFERA" },
    { src: gallery2, alt: "Dettaglio di stile barber", className: "gallery-item gallery-item-small", label: "02 / DETTAGLI" },
    { src: gallery3, alt: "Strumenti e cura del taglio", className: "gallery-item gallery-item-small", label: "03 / TECNICA" },
    { src: gallery4, alt: "Un dettaglio della cultura barber", className: "gallery-item gallery-item-wide", label: "04 / IDENTITÀ" },
  ];

  return (
    <section className="gallery section-pad" id="galleria">
      <div className="container">
        <SectionHeading index="03" eyebrow="GALLERIA" title="Il nostro" accent="stile." />
        <div className="gallery-intro reveal">
          <p>Atmosfera, strumenti e dettagli: la personalità di Eggy prende forma anche qui.</p>
          <span>UNO SGUARDO DA VICINO</span>
        </div>
        <div className="gallery-grid">
          {images.map((image) => (
            <figure className={`${image.className} reveal`} key={image.label}>
              <img src={image.src} alt={image.alt} loading="lazy" />
              <figcaption>{image.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section className="team section-pad reveal">
      <div className="container">
        <SectionHeading index="04" eyebrow="IL TEAM" title="Le mani dietro" accent="lo stile." />
        <div className="team-layout">
          <div className="team-image media-frame">
            <img src={teamImage} alt="Il barber di Eggy Barber's Square" loading="lazy" />
            <span className="media-caption">PRECISIONE · PASSIONE · PERSONALITÀ</span>
          </div>
          <div className="team-info">
            <span className="team-index">E / 01</span>
            <h3>Il tuo stile,<br /><em>la nostra firma.</em></h3>
            <p className="team-role">BARBER CULTURE</p>
            <p>Unire esperienza, ascolto e cura del dettaglio: ogni appuntamento parte da te e dal risultato che vuoi ottenere.</p>
            <a className="text-link" href={PHONE_LINK}>Parliamone <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="reviews section-pad reveal">
      <div className="container reviews-inner">
        <p className="eyebrow">UNA QUESTIONE DI ESPERIENZA</p>
        <div className="review-stars" aria-label="Cinque stelle">★★★★★</div>
        <h2>Non solo un taglio.<br /><em>Un'esperienza personale.</em></h2>
        <p>La differenza si vede nei dettagli. E si sente quando esci.</p>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact section-pad" id="contatti">
      <div className="container">
        <p className="eyebrow reveal">05 — VIENI A TROVARCI</p>
        <div className="contact-heading reveal">
          <h2>Il prossimo passo<br />è <em>il tuo.</em></h2>
          <a href={PHONE_LINK} className="cta cta-large">Prenota il tuo appuntamento <span aria-hidden="true">↗</span></a>
        </div>
        <p className="contact-lead reveal">Vieni a scoprire Eggy Barber's Square. Ti aspettiamo a Magenta.</p>
        <div className="contact-info reveal">
          <div className="contact-cell">
            <span className="contact-label">DOVE SIAMO</span>
            <a href={MAP_LINK} target="_blank" rel="noreferrer">Via IV Giugno 2<br />Magenta (MI) <span aria-hidden="true">↗</span></a>
          </div>
          <div className="contact-cell">
            <span className="contact-label">ORARI</span>
            <p>Lunedì – Sabato<br />09:00 – 19:30</p>
          </div>
          <div className="contact-cell">
            <span className="contact-label">CONTATTI</span>
            <a href={PHONE_LINK}>+39 349 453 4182 <span aria-hidden="true">↗</span></a>
            <a href={INSTAGRAM_LINK} target="_blank" rel="noreferrer">Instagram <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a className="logo footer-logo" href="#home">
          <span className="logo-main">EGGY</span>
          <span className="logo-sub">BARBER'S SQUARE</span>
        </a>
        <span className="footer-note">BARBER CULTURE · MAGENTA</span>
        <a className="back-top" href="#home">TORNA SU ↑</a>
        <span className="copyright">© {new Date().getFullYear()} Eggy Barber's Square</span>
      </div>
    </footer>
  );
}

function useScrollAnimation() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
        !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("active"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

function App() {
  useScrollAnimation();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <Services />
        <Gallery />
        <Team />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
    
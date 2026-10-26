import { StrictMode, useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { createClient } from "@supabase/supabase-js";
import emailjs from "@emailjs/browser";
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
const BOOKING_LINK = "/prenota";
const SUPABASE_URL = "https://bjslpgjnzaikvrsxntkk.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_ZqtW0xLMtqhEw0zNRtM4Mw_cBtYWwhf";
const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
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
          <a className="cta nav-cta" href={BOOKING_LINK} onClick={closeMenu}>Prenota <span aria-hidden="true">↗</span></a>
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
          <a href={BOOKING_LINK} className="cta">Prenota un appuntamento <span aria-hidden="true">↗</span></a>
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
              <a href={BOOKING_LINK} className="service-arrow" aria-label={`Prenota ${service.name}`}>↗</a>
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
          <a href={BOOKING_LINK} className="cta cta-large">Prenota il tuo appuntamento <span aria-hidden="true">↗</span></a>
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

function BookingPage() {
  const [date, setDate] = useState(() => {
    const now = new Date();
    const local = new Date(now.getTime() - now.getTimezoneOffset() * 60000);
    return local.toISOString().slice(0, 10);
  });
  const [slots, setSlots] = useState([]);
  const [selectedTime, setSelectedTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const today = (() => {
    const now = new Date();
    return new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
  })();

  useEffect(() => {
    let active = true;
    async function loadSlots() {
      setLoadingSlots(true);
      setError("");
      setSelectedTime("");
      const { data, error: slotsError } = await supabase.rpc("get_available_slots", { p_date: date });
      if (!active) return;
      if (slotsError) {
        setSlots([]);
        setError("Non riesco a caricare gli orari. Riprova tra poco.");
      } else {
        const now = new Date();
        const localToday = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
        const currentTime = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
        setSlots((data || []).filter((slot) => {
          const time = String(slot.slot_time).slice(0, 5);
          return slot.available && !(date === localToday && time <= currentTime);
        }));
      }
      setLoadingSlots(false);
    }
    if (date) loadSlots();
    return () => { active = false; };
  }, [date]);

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");

    if (!selectedTime) {
      setError("Seleziona un orario disponibile.");
      return;
    }

    if (!window.crypto?.randomUUID) {
      setError("Questo browser non supporta la prenotazione sicura. Aggiorna il browser e riprova.");
      return;
    }

    setSubmitting(true);
    const cancellationToken = `${window.crypto.randomUUID()}${window.crypto.randomUUID()}`;

    try {
      // Registra prima la prenotazione su Supabase.
      const { data: bookingId, error: bookingError } = await supabase.rpc("create_booking", {
        p_date: date,
        p_time: selectedTime,
        p_name: name.trim(),
        p_phone: phone.trim(),
        p_email: email.trim(),
        p_cancellation_token: cancellationToken,
      });

      if (bookingError) {
        setError(
          bookingError.message?.includes("appena prenotato")
            ? "Qualcun altro ha appena prenotato questo orario. Scegline un altro."
            : bookingError.message || "Non è stato possibile completare la prenotazione."
        );

        const { data } = await supabase.rpc("get_available_slots", { p_date: date });
        if (data) {
          const now = new Date();
          const localToday = new Date(now.getTime() - now.getTimezoneOffset() * 60000)
            .toISOString()
            .slice(0, 10);
          const currentTime = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
          setSlots(
            data.filter(
              (slot) => slot.available && !(date === localToday && String(slot.slot_time).slice(0, 5) <= currentTime)
            )
          );
        }
        return;
      }

      // La prenotazione è salvata: prepara il link personale per cancellarla.
      // create_booking restituisce l'UUID della prenotazione.
      const cancellationLink = bookingId
        ? `${window.location.origin}/cancella?id=${encodeURIComponent(bookingId)}&token=${encodeURIComponent(cancellationToken)}`
        : "";

      // Se EmailJS fallisce, la prenotazione rimane confermata.
      try {
        await emailjs.send(
          "service_attxoaw",
          "template_0xqw8rk",
          {
            to_email: email.trim(),
            customer_name: name.trim(),
            appointment_date: new Date(`${date}T12:00:00`).toLocaleDateString("it-IT", {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric",
            }),
            appointment_time: selectedTime,
            cancellation_link: cancellationLink,
          },
          { publicKey: "elsn4_PeMM6tbOAMh" }
        );
      } catch (emailError) {
        console.error("La prenotazione è stata salvata, ma l'email non è stata inviata:", emailError);
      }

      setSuccess(true);
    } catch (unexpectedError) {
      console.error("Errore durante la prenotazione:", unexpectedError);
      setError("Si è verificato un errore imprevisto. Controlla la connessione e riprova.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="booking-page">
      <header className="booking-header">
        <a className="logo" href="/" aria-label="Torna alla homepage">
          <span className="logo-main">EGGY</span><span className="logo-sub">BARBER'S SQUARE</span>
        </a>
        <a className="booking-back" href="/">← Torna al sito</a>
      </header>
      <main className="booking-main">
        <p className="eyebrow">EGGY BARBER'S SQUARE · MAGENTA</p>
        <h1>Prenota il tuo<br /><em>appuntamento.</em></h1>
        <p className="booking-intro">Scegli il giorno e l'orario, poi lasciaci i tuoi contatti. La prenotazione viene confermata al termine della procedura.</p>

        {success ? (
          <section className="booking-success" role="status">
            <span className="booking-success-mark">✓</span>
            <p className="eyebrow">PRENOTAZIONE CONFERMATA</p>
            <h2>Ti aspettiamo.</h2>
            <p>Il tuo appuntamento è stato registrato per il <strong>{new Date(`${date}T12:00:00`).toLocaleDateString("it-IT", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}</strong> alle <strong>{selectedTime}</strong>.</p>
            <p>Per modifiche o cancellazioni, contatta direttamente la barberia.</p>
            <a className="cta" href="/">Torna al sito <span aria-hidden="true">↗</span></a>
          </section>
        ) : (
          <form className="booking-form" onSubmit={handleSubmit}>
            <div className="booking-field">
              <label htmlFor="booking-date">01 — Scegli il giorno</label>
              <input id="booking-date" type="date" value={date} min={today} required onChange={(event) => { setDate(event.target.value); setError(""); }} />
              <span className="booking-hint">Il lunedì la barberia è chiusa.</span>
            </div>
            <fieldset className="booking-field booking-time-field">
              <legend>02 — Scegli l'orario</legend>
              {loadingSlots ? <p className="booking-hint">Caricamento orari...</p> : slots.length ? (
                <div className="booking-slots">
                  {slots.map((slot) => {
                    const time = String(slot.slot_time).slice(0, 5);
                    return <button className={`booking-slot${selectedTime === time ? " is-selected" : ""}`} type="button" key={time} aria-pressed={selectedTime === time} onClick={() => { setSelectedTime(time); setError(""); }}>{time}</button>;
                  })}
                </div>
              ) : <p className="booking-hint">Non ci sono orari disponibili per questa data. Prova un altro giorno.</p>}
            </fieldset>
            <div className="booking-field">
              <label htmlFor="booking-name">03 — Il tuo nome</label>
              <input id="booking-name" type="text" autoComplete="name" minLength="2" maxLength="100" value={name} onChange={(event) => setName(event.target.value)} placeholder="Nome e cognome" required />
            </div>
            <div className="booking-field">
              <label htmlFor="booking-phone">04 — Numero di telefono</label>
              <input id="booking-phone" type="tel" autoComplete="tel" minLength="6" maxLength="30" value={phone} onChange={(event) => setPhone(event.target.value)} placeholder="Il tuo numero" required />
            </div>
            <div className="booking-field">
              <label htmlFor="booking-email">05 — Indirizzo email</label>
              <input id="booking-email" type="email" autoComplete="email" maxLength="254" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="nome@esempio.it" required />
            </div>
            {error && <p className="booking-error" role="alert">{error}</p>}
            <button className="cta booking-submit" type="submit" disabled={submitting || loadingSlots || !selectedTime}>
              {submitting ? "Invio in corso..." : "Conferma prenotazione"} <span aria-hidden="true">↗</span>
            </button>
            <p className="booking-privacy">I dati inseriti vengono utilizzati per gestire il tuo appuntamento.</p>
          </form>
        )}
      </main>
      <footer className="booking-footer">© {new Date().getFullYear()} Eggy Barber's Square · Magenta</footer>
    </div>
  );
}

function CancellationPage() {
  const [state, setState] = useState("loading");
  const [message, setMessage] = useState("Stiamo verificando il link di cancellazione...");
  const requestStarted = useRef(false);

  useEffect(() => {
    // Evita una seconda chiamata RPC in sviluppo, dove StrictMode ripete gli effetti.
    if (requestStarted.current) return;
    requestStarted.current = true;

    async function cancelBooking() {
      const params = new URLSearchParams(window.location.search);
      const bookingId = params.get("id");
      const cancellationToken = params.get("token");

      if (!bookingId || !cancellationToken) {
        setState("error");
        setMessage("Il link non è completo o non è valido. Contatta direttamente la barberia.");
        return;
      }

      const { data, error } = await supabase.rpc("cancel_booking", {
        p_booking_id: bookingId,
        p_cancellation_token: cancellationToken,
      });

      if (error) {
        console.error("Errore durante la cancellazione:", error);
        setState("error");
        setMessage("Non siamo riusciti a cancellare la prenotazione. Contatta direttamente la barberia.");
        return;
      }

      if (data === "cancelled") {
        setState("success");
        setMessage("La tua prenotazione è stata cancellata correttamente.");
      } else if (data === "already_cancelled") {
        setState("already-cancelled");
        setMessage("Questa prenotazione è già stata cancellata in precedenza.");
      } else {
        setState("error");
        setMessage("Il link non è valido oppure è scaduto. Se hai bisogno di aiuto, contatta la barberia.");
      }
    }

    cancelBooking();
  }, []);

  return (
    <div className="booking-page">
      <header className="booking-header">
        <a className="logo" href="/" aria-label="Torna alla homepage">
          <span className="logo-main">EGGY</span><span className="logo-sub">BARBER'S SQUARE</span>
        </a>
        <a className="booking-back" href="/">← Torna al sito</a>
      </header>
      <main className="booking-main">
        <p className="eyebrow">EGGY BARBER'S SQUARE · MAGENTA</p>
        <h1>{state === "success" ? <>Prenotazione<br /><em>cancellata.</em></> : state === "already-cancelled" ? <>Prenotazione<br /><em>già cancellata.</em></> : <>Gestione<br /><em>prenotazione.</em></>}</h1>
        <section className="booking-success" role="status" aria-live="polite">
          {state === "loading" ? <p className="booking-hint">Verifica in corso...</p> : <span className="booking-success-mark">{state === "success" || state === "already-cancelled" ? "✓" : "!"}</span>}
          <p>{message}</p>
          <a className="cta" href="/">Torna al sito <span aria-hidden="true">↗</span></a>
        </section>
      </main>
      <footer className="booking-footer">© {new Date().getFullYear()} Eggy Barber's Square · Magenta</footer>
    </div>
  );
}

function HomePage() {
  useScrollAnimation();
  return (
    <>
      <Navbar />
      <main>
        <Hero /><Philosophy /><Services /><Gallery /><Team /><Reviews /><Contact />
      </main>
      <Footer />
    </>
  );
}

function App() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  if (path === BOOKING_LINK) return <BookingPage />;
  if (path === "/cancella") return <CancellationPage />;
  return <HomePage />;
}

createRoot(document.getElementById("root")).render(
  <StrictMode><App /></StrictMode>
);
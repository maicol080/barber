import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import heroImage from "./assets/hero.avif";
import philosophyImage from "./assets/philosophy.avif";
import gallery1 from "./assets/gallery1.avif";
import gallery2 from "./assets/gallery2.avif";
import gallery3 from "./assets/gallery3.avif";
import gallery4 from "./assets/gallery4.avif";
import teamImage from "./assets/team.jpg";

// ---- Inlined from components/Navbar.jsx ----
function Navbar(){

    return(
        <nav className="navbar">

            <div className="logo">
                EGGY
                <span>BARBER'S SQUARE</span>
            </div>


            <ul className="nav-links">
                <li>Home</li>
                <li>Servizi</li>
                <li>Galleria</li>
                <li>Contatti</li>
            </ul>


            <a href="tel:+393494534182" className="cta" idName="nav">
                Prenota
            </a>

        </nav>
    )

}

// ---- Inlined from components/Hero.jsx ----
function Hero(){

    return(

        <section className="hero">


            <div className="hero-content">

                <p className="subtitle">
                    BARBER SHOP
                </p>


                <h1>
                    Tradizione.
                    <br />
                    Precisione.
                    <br />
                    Stile.
                </h1>


                <p>
                    Un'esperienza barber premium
                    dove tecnica e cura dei dettagli
                    incontrano lo stile moderno.
                </p>


                <a href="tel:+393494534182" className="cta">
                    Prenota ora
                </a>

            </div>



            <div className="hero-image">

                <img
                    src={heroImage}
                    alt="Eggy Barber Shop"
                />

            </div>


        </section>

    )

}

// ---- Inlined from components/Philosophy.jsx ----
function Philosophy(){

    return(

        <section className="philosophy reveal">


            <div className="philosophy-image">

                <img
                
                    src={philosophyImage}
                    alt="Philosophy"
                
                />

            </div>



            <div className="philosophy-text">

                <p className="subtitle">
                    LA NOSTRA FILOSOFIA
                </p>


                <h2>
                    L'arte del dettaglio
                </h2>


                <p>
                    Ogni taglio racconta una storia.
                    Da Eggy Barber's Square uniamo
                    tradizione e tecniche moderne
                    per creare uno stile unico.
                </p>


            </div>


        </section>

    )

}

// ---- Inlined from components/Services.jsx ----
function Services(){

    const services = [
        {
            name:"Haircut",
            description:"Taglio personalizzato studiato sulla forma del viso e sul tuo stile.",
            price:"30€"
        },
        {
            name:"Beard",
            description:"Modellatura e cura della barba con tecniche tradizionali.",
            price:"20€"
        },
        {
            name:"Gentleman",
            description:"Taglio e barba per un'esperienza completa.",
            price:"45€"
        },
        {
            name:"Luxury Treatment",
            description:"Trattamento premium dedicato alla cura personale.",
            price:"50€"
        }
    ]


    return(

        <section className="services reveal">


            <div className="section-title">

                <p className="subtitle">
                    SERVIZI
                </p>

                <h2>
                    La cura del dettaglio
                </h2>

            </div>



            <div className="services-list">


                {services.map((service,index)=>(


                    <div className="service-item" key={index}>


                        <span>
                            0{index + 1}
                        </span>


                        <div>

                            <h3>
                                {service.name}
                            </h3>

                            <p>
                                {service.description}
                            </p>

                        </div>


                        <strong>
                            {service.price}
                        </strong>


                    </div>


                ))}


            </div>


        </section>

    )

}

// ---- Inlined from components/Gallery.jsx ----
function Gallery(){

    return(

        <section className="gallery reveal">


            <div className="section-title">

                <p className="subtitle">
                    PORTFOLIO
                </p>

                <h2>
                    Il nostro stile
                </h2>

            </div>



            <div className="gallery-grid">


                <div className="gallery-large">

                    <img src={gallery1} alt="" />

                </div>



                <div className="gallery-small">

                    <div id = "sinistra">

                        <img src={gallery2} alt="" />

                    </div>


                    <div>

                        <img src={gallery3} alt="" />

                    </div>


                </div>



                <div className="gallery-wide">

                    <img src={gallery4} alt="" />

                </div>


            </div>


        </section>

    )

}

// ---- Inlined from components/Team.jsx ----
function Team(){

    return(

        <section className="team reveal">


            <div className="section-title">

                <p className="subtitle">
                    IL TEAM
                </p>

                <h2>
                    Le mani dietro lo stile
                </h2>

            </div>



            <div className="team-member">


                <div className="team-image">

                    <img 
                        src={teamImage}
                        alt="Master Barber"
                    />


                </div>



                <div className="team-info">

                    <h3>
                        Nome Barber
                    </h3>


                    <p>
                        Master Barber
                    </p>


                    <p>
                        Specializzato in tagli
                        classici e tecniche moderne.
                    </p>


                </div>


            </div>


        </section>

    )

}

// ---- Inlined from components/Reviews.jsx ----
function Reviews(){

    return(

        <section className="reviews reveal">


            <p className="subtitle">
                RECENSIONI
            </p>


            <h2>
                "Un'esperienza unica,
                non solo un semplice taglio."
            </h2>


            <span>
                ★★★★★
            </span>


        </section>

    )

}

// ---- Inlined from components/Contact.jsx ----
function Contact(){

    return(

        <section className="contact reveal">


            <h2>
                Prenota il tuo appuntamento
            </h2>


            <p>
                Vieni a scoprire Eggy Barber's Square.
            </p>


            <a href="tel:+393494534182" className="cta">
                Prenota ora
            </a>



            <div className="contact-info">

                <a
                href="https://www.google.it/maps/place/Eggy+Barber's+Square/@45.4657135,8.8807793,17z/data=!3m1!4b1!4m6!3m5!1s0x4786f1eb62ff4627:0x5ab8e7d3d4f0224c!8m2!3d45.4657098!4d8.8833542!16s%2Fg%2F11h0ch2w5k?entry=ttu&g_ep=EgoyMDI2MDcwOC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noreferrer"
                >
                    Via IV Giugno 2 - Magenta
                </a>

                <div>

                <h4>ORARI</h4>

                    <p>
                        Lun - Sab
                        <br/>
                        9:00 - 19:30
                    </p>

                </div>

                <a 
                href="https://www.instagram.com/eggybarberssquare/"
                target="_blank"
                rel="noreferrer"
                >
                    Instagram
                </a>

            </div>


        </section>

    )

}

// ---- Inlined from useScrollAnimation.js ----
function useScrollAnimation(){

    useEffect(()=>{

        const elements = document.querySelectorAll(".reveal");


        const observer = new IntersectionObserver(
            (entries)=>{

                entries.forEach(entry=>{

                    if(entry.isIntersecting){

                        entry.target.classList.add("active");

                    }

                });

            },
            {
                threshold:0.15
            }
        );


        elements.forEach(el=>observer.observe(el));


        return ()=>{
            observer.disconnect();
        };


    },[]);

}

// ---- Inlined from App.jsx ----
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
    </>
  )
}

// ---- Inlined from main.jsx ----
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
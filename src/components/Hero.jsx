import heroImage from "../assets/hero.avif";

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

export default Hero;
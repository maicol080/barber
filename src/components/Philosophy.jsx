import philosophyImage from "../assets/philosophy.avif";

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

export default Philosophy;
import gallery1 from "../assets/gallery1.avif";
import gallery2 from "../assets/gallery2.avif";
import gallery3 from "../assets/gallery3.avif";
import gallery4 from "../assets/gallery4.avif";

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


export default Gallery;
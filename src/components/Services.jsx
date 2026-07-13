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


export default Services;
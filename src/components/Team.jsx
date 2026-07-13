import teamImage from "../assets/team.jpg";

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


export default Team;
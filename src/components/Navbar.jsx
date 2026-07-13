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

export default Navbar;
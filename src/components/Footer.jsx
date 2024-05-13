import {Link} from "react-router-dom"


export default function Footer() {
    return(
        <footer>
        <section>
            <div class="container" style={{paddingTop:'50px', paddingBottom:'50px'}}>
                <div class="row justify-content-center">
                    <article class="col-md-6 col-lg-3 mb-5">
                        <h4>John Doe</h4>
                        <p>40 Rue Laure Diebold <br />69009 Lyon, France <br />Téléphone : 06 20 30 40 50</p>
                        <div style={{display: 'flex',justifyContent: 'space-around',alignItems: 'center',width: '200px' }}>
                         <i class="fa-brands fa-github fa-3x"></i>
                         <i class="fa-brands fa-square-twitter fa-3x"></i>
                         <i class="fa-brands fa-linkedin fa-3x"></i>
                        
                        </div>
                    </article>
                    <article class="col-md-6 col-lg-3 mb-5">
                        <h4>Liens utiles</h4>
                        <ul>
                            <li>
                                <Link class="nav-link active" aria-current="page" to="/">Accueil</Link>
                            </li>
                            <li>
                                <Link class="nav-link active" aria-current="page" to="/">A propos</Link>
                            </li>
                            <li>
                               <Link class="nav-link" to="/services">Services</Link>
                            </li>
                            <li>
                               <Link class="nav-link " to="/contact">Me contacter</Link>
                            </li>
                            <li>
                               <Link class="nav-link " to="/mentions-legales">Mentions légales</Link>
                            </li>
                        </ul>
                    </article >
                    <article class="col-md-6 col-lg-3 mb-5">
                    <h4>Mes dernières réalisations</h4>
                    <ul>
                        <li>
                            <Link class="nav-link" to="/achievements">Fresh food</Link>
                        </li>
                        <li>
                            <Link class="nav-link" to="/achievements">Restaurant Akira</Link>
                        </li>
                        <li>
                           <Link class="nav-link" to="/achievements">Espace bien-être</Link>
                        </li>
                    </ul>
                    </article>
                    <article class="col-md-6 col-lg-3 mb-5">
                    <h4>Mes derniers articles</h4>
                    <ul>
                        <li>
                           <Link class="nav-link" to="/blog">Coder son site en HTML/CSS</Link>
                        </li>
                        <li>
                            <Link class="nav-link" to="/blog">Vendre ses produits sur le web</Link>
                        </li>
                        <li>
                            <Link class="nav-link" to="/blog">Se positionner sur Google</Link>
                        </li>
                    </ul>
                    </article>

                </div>
            </div>
        </section>
        <section id="p-copy" class="text-white text-center" style={{paddingTop:'20px', paddingBottom:'20px',}}> 
           <p  class=" m-0">&copy; Designed by John Doe</p>
           <a id="haut-page" href="#navi"  class="btn btn-primary" style={{marginTop:'20px', marginBottom:'20px',}}>Haut de Page</a>
        </section>
    </footer>

    )
}

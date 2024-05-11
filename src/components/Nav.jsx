import {Link} from "react-router-dom"
import Imagelogo from '../img/apple-touch-icon.png'


export default function Nav() {

  return(

    <header>
        <nav id="navi" class="navbar navbar-expand-lg" > 
          <div class="container-fluid">
            <Link class="navbar-brand text-uppercase text-light" to="/"><img src={Imagelogo} alt="Lo" width="30" height="24" class="d-inline-block align-text-top" /> john doe </Link>
            <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link id="p-accueil" class="nav-link  text-uppercase " aria-current="page" to="/">accueil</Link>
            </li>
            <li class="nav-item">
              <Link id="p-services" class="nav-link text-uppercase" to="/services">services</Link>
            </li>
            <li class="nav-item">
              <Link id="p-realisations" class="nav-link text-uppercase " to="/achievements">réalisations</Link>
            </li>
            <li class="nav-item">
              <Link id="p-blog" class="nav-link text-uppercase" to="/blog">blog</Link>
            </li>
            <li class="nav-item">
              <Link id="p-contact" class="nav-link text-uppercase " to="/contact">me contacter</Link>
            </li>
           </ul>
            </div>
         </div>
       </nav>


      </header>
  )
}


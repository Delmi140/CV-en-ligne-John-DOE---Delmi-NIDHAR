import {Link} from "react-router-dom"
import Imagelogo from '../img/apple-touch-icon.png'


export default function Nav() {

  return(

    <header>
        <nav id="navi" class="navbar navbar-expand-lg" > 
          <div class="container-fluid">
            <Link class="navbar-brand text-uppercase text-light py-3 px-0 px-lg-3 " to="/"><img src={Imagelogo} alt="Lo" width="30" height="24" class="d-inline-block align-text-top  " /> john doe </Link>
            <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav ms-auto ">
            <li class="nav-item mx-0 mx-lg-1">
              <Link id="p-accueil" class="nav-link py-3 px-0 px-lg-3  text-uppercase " aria-current="page" to="/">accueil</Link>
            </li>
            <li class="nav-item mx-0 mx-lg-1">
              <Link id="p-services" class="nav-link py-3 px-0 px-lg-3  text-uppercase" to="/services">services</Link>
            </li>
            <li class="nav-item mx-0 mx-lg-1">
              <Link id="p-realisations" class="nav-link py-3 px-0 px-lg-3  text-uppercase " to="/achievements">réalisations</Link>
            </li>
            <li class="nav-item mx-0 mx-lg-1">
              <Link id="p-blog" class="nav-link py-3 px-0 px-lg-3  text-uppercase" to="/blog">blog</Link>
            </li>
            <li class="nav-item mx-0 mx-lg-1">
              <Link id="p-contact" class="nav-link py-3 px-0 px-lg-3  text-uppercase " to="/contact">me contacter</Link>
            </li>
           </ul>
            </div>
         </div>
       </nav>


      </header>
  )
}


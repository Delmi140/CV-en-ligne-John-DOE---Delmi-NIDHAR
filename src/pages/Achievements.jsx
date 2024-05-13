
import Imagefood from '../img/portfolio/fresh-food.jpg'
import Imagerest from '../img/portfolio/restaurant-japonais.jpg'
import Imageespa from '../img/portfolio/espace-bien-etre.jpg'



export default function Achievements(){


return(

    <main>
            
            <section class="imgban">
               
            </section>
            <section>

            <div id="portfolio" class="text-center p-4"  >
                
            <h2 class="text-uppercase">Portfolio</h2>
            <p>Voici quelques-unes de mes réalisations.</p>
            <div class="progress" role="progressbar" aria-label="Example 1px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{height:'4px',marginBottom: '50px',}}>
                       <div class="progress-bar" style={{width:'100%'}}></div>
                 </div>
            <div class="row justify-content-center">
            <div class="card col-md-6 col-lg-4 mb-5" style={{width: '25rem',paddingRight:'0px', paddingLeft:'0px',marginBlockStart: '50px',marginLeft:'35px',marginRight:'35px'}} >
               <img src={Imagefood} class="card-img-top" alt="image-fresh-food"/>
               <div class="card-body ">
                  <h5 class="card-title">Fresh food</h5>
                  <p class="card-text">Réalisation d'un site avec commande en ligne.</p>
                  <button type="button" class="btn btn-outline-primary">Voir</button>

                </div>
                <div class="card-footer">
                Site réalisé avec PHP et MySQL
                </div>
            </div>
            <div class="card col-md-6 col-lg-4 mb-5" style={{width: '25rem',paddingRight:'0px', paddingLeft:'0px',marginBlockStart: '50px',marginLeft:'35px',marginRight:'35px'}} >
               <img src={Imagerest} class="card-img-top" alt="image restaurant akira"/>
               <div class="card-body">
                  <h5 class="card-title">Restaurant Akira</h5>
                  <p class="card-text">Réalisation d'un site vitrine.</p>
                  <button type="button" class="btn btn-outline-primary">Voir</button>
                </div>
                <div class="card-footer">
                Site réalisé avec WordPress
                </div>
            </div>
            <div class="card col-md-6 col-lg-4 mb-5" style={{width: '25rem',paddingRight:'0px', paddingLeft:'0px',marginBlockStart: '50px',marginLeft:'35px',marginRight:'35px'}} >
               <img src={Imageespa} class="card-img-top" alt="espace bien-être"/>
               <div class="card-body">
                  <h5 class="card-title">Espace bien-être</h5>
                  <p class="card-text">Réalisation d'un site vitrine pour un patricien de bien-être..</p>
                  <button type="button" class="btn btn-outline-primary">Voir</button>
                </div>
                <div class="card-footer">
                Site réalisé en HTML/CSS
                </div>
            </div>
            
            </div>
              
            </div>
            
            </section>
        </main>

  
)


}



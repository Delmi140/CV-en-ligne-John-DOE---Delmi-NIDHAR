import Imagebanner from '../img/banner.jpg'


export default function Services(){



  return(
    <main>
      <div>
            <section>
               <img src={Imagebanner} alt="banner" />
            </section>
            
            <section>
                <div id="services" class="text-center p-4">
                <h2 class="text-uppercase">MON OFFRE DE SERVICES</h2>
                <p>Voici les prestations sur lesquelles je peux intervenir.</p>
                
                
               
                <div class="progress" role="progressbar" aria-label="Example 1px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{height:'4px',marginBottom: '50px', }}>
                       <div class="progress-bar" style={{width:'100%',}}></div>
                 </div>
                <div class="row" style={{display: 'flex',justifyContent: 'space-around',alignItems: 'center', }}> 
                    <div class="card col-md-4" style={{width: '25rem', paddingBlockStart: '100px', paddingBlockEnd: '100px',marginBlockStart: '50px', }}>
                      <i id="icon-ux" class="fa-solid fa-desktop fa-3x" ></i>
                      <h3 class="text-uppercase">UX DESIGN</h3>
                      <p>L'UX Design est une méthode de conception centrée sur l'utilisateur. Son but est d'offrir une expérience de navigation optimale à l'internaute.</p>
                    </div>
                    <div class="card col-md-4" style={{width: '25rem', paddingBlockStart: '100px', paddingBlockEnd: '100px',marginBlockStart: '50px' }}>
                    <i id="icon-dev" class="fa-solid fa-file fa-3x"></i>
                      <h3 class="text-uppercase">DÉVELOPPEMENT WEB</h3>
                      <p>Le développement de sites web repose sur l'utilisation des langages HTML, CSS JavaScript et PHP.</p>
                    </div>
                    <div  class="card col-md-4" style={{width: '25rem',paddingBlockStart: '100px', paddingBlockEnd: '100px',marginBlockStart: '50px' }}>
                    <i id="icon-ref" class="fa-solid fa-magnifying-glass-dollar fa-3x"></i>
                      <h3 class="text-uppercase">RÉFÉRENCEMENT</h3>
                      <p>Le référencement naturel d'un site, aussi appelé SEO, consiste à mettre des techniques en oeuvre pour améliorer sa position dans les résultats des moteurs de recherche.</p>
                    </div>

                </div>


                </div>
            </section>
        </div>

    </main>
  )
}







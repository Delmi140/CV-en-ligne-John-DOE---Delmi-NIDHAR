import Imagecontact from '../img/contact-bg.jpg'


export default function Contact() {

  return(

    <main>
      <div>
            <section class="row justify-content-center " style={{ backgroundImage: 'linear-gradient(rgba(0, 105, 255, 0.5), rgba(0, 105, 255, 0.5)),url(' + Imagecontact + ')', backgroundRepeat:'no-repeat', backgroundAttachment:'fixed',backgroundPosition:'center', backgroundSize:'cover'}}>
            <div class="card" style={{width: '70rem',marginBottom: '50px',marginTop: '50px'}} >
              <div class="card-body">
                 <h2 class="text-center ">ME CONTACTER</h2>
                 <p class="text-center">Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
                 <div class="progress" role="progressbar" aria-label="Example 1px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{height:'4px',marginBottom: '50px',}}>
                       <div class="progress-bar" style={{width:'100%'}}></div>
                 </div>
                  <div class="row justify-content-center">
                    <div class="col-md-6">
                    <h3 class="forcont text-uppercase">Formulaire de contact</h3>
                    <div class="progress" role="progressbar" aria-label="Example 1px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{height:'2px',marginBottom: '50px',}}>
                       <div class="progress-bar" style={{width:'100%'}}></div>
                    </div>
                        <form action="index.html"  method="post">
                        <div class="mb-3">
                          <input type="text" class="form-control"  style={{marginBottom:'20px'}} placeholder='Votre nom' id="nom" required/>
                        </div>
                        <div class="mb-3">
                          <input type="email" class="form-control" style={{marginBottom:'20px'}} placeholder='Votre adresse email' id="email" required/>
                        </div>
                        <div class="mb-3">
                          <input type="tel" class="form-control" style={{marginBottom:'20px'}} placeholder='Votre numéro de téléphone' id="phone" required/>
                        </div>
                        <div class="mb-3">
                          <input type="sujet" class="form-control" style={{marginBottom:'20px'}} placeholder='Sujet' id="sujet" required/>
                        </div>
                        <div class="mb-3">
                            <textarea rows="4" cols="50" class="form-control" style={{marginBottom:'20px'}} placeholder='Votre message' id="message" required></textarea>
                        </div>
                        <div class="text-center">
                           <a  class="btn btn-primary " >Envoyer</a>
                        </div>
                    </form>

                    </div>
                    <div class="col-md-6">
                    <h3 class="mescoord text-uppercase">Mes coordonnées</h3>
                    <div class="progress" role="progressbar" aria-label="Example 1px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{height:'2px',marginBottom: '50px',}}>
                       <div class="progress-bar" style={{width:'100%'}}></div>
                    </div>
                        <address>
                            <i class="fas fa-map-marker"></i> 40 Rue Laure Diebold, 69009 Lyon, France<br/>
                            <i class="fas fa-mobile-alt"></i> 06 20 30 40 50<br/>
                        </address>
                        
                        <iframe src="https://www.google.fr/maps/place/40+Rue+Laure+Diebold,+69009+Lyon/@45.778662,4.7989789,17z/data=!3m1!4b1!4m6!3m5!1s0x47f4eb65edac5b3f:0xe01c47049cb2e2b9!8m2!3d45.778662!4d4.7989789!16s%2Fg%2F11c24790th?entry=ttu" width="100%" height="400"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                  </div>
              </div>
            </div>
              
            </section>
        </div>

    </main>


  )
}



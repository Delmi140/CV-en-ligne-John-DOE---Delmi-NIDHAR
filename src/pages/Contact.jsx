import Imagecontact from '../img/contact-bg.jpg'


export default function Contact() {

  return(

    <main>
      <div>
            <section class="row justify-content-center " style={{ backgroundImage: 'linear-gradient(rgba(0, 105, 255, 0.5), rgba(0, 105, 255, 0.5)),url(' + Imagecontact + ')', }}>
            <div class="card" style={{width: '70rem',marginBottom: '50px',marginTop: '50px'}} >
              <div class="card-body">
                 <h2 class="text-center ">ME CONTACTER</h2>
                 <p class="text-center">Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
                 <div class="progress" role="progressbar" aria-label="Example 1px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{height:'4px',marginBottom: '50px',}}>
                       <div class="progress-bar" style={{width:'100%'}}></div>
                 </div>
                  <div class="row justify-content-center">
                    <div class="col-md-6">
                    <h3 class="text-uppercase">Formulaire de contact</h3>
                    <div class="progress" role="progressbar" aria-label="Example 1px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{height:'2px',marginBottom: '50px',}}>
                       <div class="progress-bar" style={{width:'100%'}}></div>
                    </div>
                        <form action="index.html" method="post">
                        <div class="mb-3">
                          <label for="nom" class="form-label">Votre nom (*)</label>
                          <input type="text" class="form-control" id="nom" required/>
                        </div>
                        <div class="mb-3">
                          <label for="email" class="form-label">Votre email (*)</label>
                          <input type="email" class="form-control" id="email" required/>
                        </div>
                        <div class="mb-3">
                          <label for="phone" class="form-label">Votre numéro de téléphone (*)</label>
                          <input type="tel" class="form-control" id="phone" required/>
                        </div>
                        <div class="mb-3">
                            <label for="message" class="form-label">Votre message (*)</label>
                            <textarea rows="4" cols="50" class="form-control" id="message" required></textarea>
                        </div>
                        <a  class="btn btn-primary " >Envoyer</a>
                    </form>

                    </div>
                    <div class="col-md-6">
                    <h3 class="text-uppercase">Mes coordonnées</h3>
                    <div class="progress" role="progressbar" aria-label="Example 1px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{height:'2px',marginBottom: '50px',}}>
                       <div class="progress-bar" style={{width:'100%'}}></div>
                    </div>
                        <address>
                            <i class="fas fa-map-marker"></i> 40 Rue Laure Diebold, 69009 Lyon, France<br/>
                            <i class="fas fa-mobile-alt"></i> 06 20 30 40 50<br/>
                        </address>
                        <iframe src="https://www.google.fr/maps/place/40+Rue+Laure+Diebold,+69009+Lyon/@45.7786657,4.796404,17z/data=!3m1!4b1!4m6!3m5!1s0x47f4eb65edac5b3f:0xe01c47049cb2e2b9!8m2!3d45.778662!4d4.7989789!16s%2Fg%2F11c24790th?entry=ttu" frameborder="0"></iframe>
                    </div>
                  </div>
              </div>
            </div>
              
            </section>
        </div>

    </main>


  )
}



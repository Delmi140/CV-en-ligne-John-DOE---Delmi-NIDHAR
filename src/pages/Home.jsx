


export default function Home() {
  

  return (
       <main>
            
            <section id="slider" class="imagehero text-light text-center p-4">
                 <h1 class="text-uppercase mb-3 " style={{marginTop: '10%'}}>Bonjour, je suis John Doe</h1>
                 <h2 >Développeur web full stack</h2>
                 <a href="#aprops" class="btn btn-primary" >En savoir plus</a>
            </section>
            
    
            <section class="row justify-content-center">
                <div class="card" style={{width: '80rem',marginBottom: '50px',marginTop: '50px'}} >
                 <div class="card-body">
                 
                 <div class="row justify-content-center" id="aprops">
                    <div class=" col-md-6">
                    <h3>À propos</h3>
                    
                    <a href=""></a>
                    <div class="progress" role="progressbar" aria-label="Example 1px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{height:'2px'}}>
                       <div class="progress-bar" style={{width:'100%'}}></div>
                    </div>
                    <p>Passionné par l'informatique et les nouvelles technologies, j'ai suivi une formation d'<strong>intégrateur-développeur web </strong>au CEF. Au cours de cette formation, j'ai pu acquérir des bases solides pour travailler dans le domaine du <strong>développement web</strong>. <br /> Basé à Lyon, je suis en recherche d'une alternance au sein d'une agence digitale pour consolider ma formation de <strong>développeur web full stack</strong>. <br /> J'accorde une attention particulière à la qualité du code que j'écris et je respecte les bonnes pratiques du web.</p>
                    </div>
                    <div class=" col-md-6">
                        <div class="imagerep">

                        </div>
                        
                        <h3>Mes compétences</h3>
                        <p>HTML5 90%</p>
                            <div class="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                              <div class="progress-bar bg-danger"  style={{width:'90%'}}></div>
                            </div><br />
                            <p>CSS3 80%</p>
                            <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                              <div class="progress-bar bg-info" style={{width:'80%'}}></div>
                            </div><br />
                            <p>JAVASCRIPT 70%</p>
                            <div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                            <div class="progress-bar bg-warning" style={{width:'70%'}}></div>
                            </div> <br />
                            <p>PHP 60%</p>
                            <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                            <div class="progress-bar bg-success" style={{width: '60%'}}></div>
                            </div> <br />
                            <p>REACT 50%</p>
                            <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                            <div class="progress-bar w-50"></div>
                            </div> 
                    </div>
                 </div>
    
               </div>
            </div>

                
            </section>

        </main>

  )
}


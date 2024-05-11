import Imagebanner from '../img/banner.jpg'
import Imagecod from '../img/blog/coder.jpg'
import Imagevend from '../img/blog/croissance.jpg'
import Imagegoog from '../img/blog/google.jpg'
import Imagecodr from '../img/blog/screens.jpg'
import Imagetech from '../img/blog/seo.jpg'
import Imageapp from '../img/blog/technos.png'

export default function Blog() {
  return(

    <main>
            <section>
               <img src={Imagebanner} alt="banner" />
            </section>
            <section>
                <div id="portfolioblog" class="text-center p-4" >
                  <h2 class="text-uppercase">BLOG</h2>
                  <p>Retrouvez ici quelques articles sur le développement web.</p>
                  
                  <div class="progress" role="progressbar" aria-label="Example 1px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{height:'4px',marginBottom: '50px',}}>
                       <div class="progress-bar" style={{width:'100%'}}></div>
                 </div>
                  <div class="row" style={{display: 'flex',justifyContent: 'space-around',alignItems: 'center', }}>
                    <div class="card col-md-4 " style={{width: '25rem', paddingRight:'0px', paddingLeft:'0px',marginBlockStart: '50px',marginLeft:'35px',marginRight:'35px'}} >
                      <img src={Imagecod} class="card-img-top" alt="image coder"/>
                      <div class="card-body">
                        <h5 class="card-title">Coder son site en HTML/CSS</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the oulk of the card's content.</p>
                        <a  class="btn" style={{backgroundColor:'#0d6efd',color:'white'}}>Lire la suite</a>
                      </div>
                    <div class="card-footer">
                    Publié le 22 août 2022
                    </div>
                    </div>
                    <div class="card col-md-4"  style={{width: '25rem',paddingLeft:'0px', paddingRight:'0px',marginBlockStart: '50px',marginLeft:'35px',marginRight:'35px'}}>
                      <img src={Imagevend} class="card-img-top" alt="image vendrer"/>
                      <div class="card-body">
                        <h5 class="card-title">Vendre ses produits sur le web</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the oulk of the card's content.</p>
                        <a  class="btn" style={{backgroundColor:'#0d6efd',color:'white'}}>Lire la suite</a>
                      </div>
                    <div class="card-footer">
                    Publié le 20 août 2022
                    </div>
                    </div>
                    <div class="card col-md-4 " style={{width: '25rem', paddingLeft:'0px', paddingRight:'0px',marginBlockStart: '50px', marginLeft:'35px',marginRight:'35px'}} >
                      <img src={Imagegoog} class="card-img-top" alt="image google"/>
                      <div class="card-body">
                        <h5 class="card-title">Se positionner sur Google</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the oulk of the card's content.</p>
                        <a  class="btn" style={{backgroundColor:'#0d6efd',color:'white'}}>Lire la suite</a>
                      </div>
                    <div class="card-footer">
                    Publié le 1 août 2022
                    </div>
                    </div>
                    <div class="card col-md-4" style={{width: '25rem', marginBlockStart: '50px',paddingLeft:'0px', paddingRight:'0px',marginLeft:'35px',marginRight:'35px'}}>
                      <img src={Imagecodr} class="card-img-top" alt="image coder responsive"/>
                      <div class="card-body">
                        <h5 class="card-title">Coder en responsive design</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the oulk of the card's content.</p>
                        <a  class="btn" style={{backgroundColor:'#0d6efd',color:'white'}}>Lire la suite</a>
                      </div>
                    <div class="card-footer">
                    Publié le 31 juillet 2022
                    </div>
                    </div>
                    <div class="card col-md-4" style={{width: '25rem',marginBlockStart: '50px',paddingLeft:'0px', paddingRight:'0px',marginLeft:'35px',marginRight:'35px'}} >
                      <img src={Imagetech} class="card-img-top" alt="image techniques"/>
                      <div class="card-body">
                        <h5 class="card-title">Techniques de référencement</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the oulk of the card's content.</p>
                        <a  class="btn" style={{backgroundColor:'#0d6efd',color:'white'}} >Lire la suite</a>
                      </div>
                    <div class="card-footer">
                    Publié le 30 juillet 2022
                    </div>
                    </div>
                    <div class="card col-md-4" style={{width: '25rem', marginBlockStart: '50px',paddingLeft:'0px', paddingRight:'0px',marginLeft:'35px',marginRight:'35px'}}>
                      <img src={Imageapp} class="card-img-top" alt="image espace bien-être"/>
                      <div class="card-body">
                        <h5 class="card-title">Apprendre à coder</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the oulk of the card's content.</p>
                        <a  class="btn " style={{backgroundColor:'#0d6efd',color:'white'}}>Lire la suite</a>
                      </div>
                    <div class="card-footer">
                    Publié le 12 juillet 2022
                    </div>
                    </div>
                 </div>
                </div>
            </section>
            

            
        </main>



  )
}


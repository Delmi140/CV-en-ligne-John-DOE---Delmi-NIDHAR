import React,{useState,useEffect} from "react"


export default function Mentionslegales(){

  const [users,setUsers] = useState ([]);

  const getUsers = async () => {
    const res= await fetch("https://api.github.com/users/github-john-doe/repos")
    const json = await res.json();
    setUsers(json)
  }

  useEffect(() => {
    getUsers();
  },[])

  return(

    <main>
            <section id="mentionslegales" class="text-center p-4">
              <div class="container">
                <h2 class="text-uppercase">MENTIONS LÉGALES</h2>
                <div class="progress" role="progressbar" aria-label="Example 1px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{height:'4px',marginBottom: '50px',}}>
                       <div class="progress-bar" style={{width:'100%'}}></div>
                 </div>
                <div class="accordion" id="accordionPanelsStayOpenExample">
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="panelsStayOpen-headingOne"><button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">Éditeur du site</button></h2>
                    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                       <div class="accordion-body">
                        <h3>John Doe</h3>
                        <address>
                            <i class="fas fa-map-marker"></i> 40 Rue Laure Diebold <br /> 69009 Lyon, France<br/>
                            <i class="fas fa-mobile-alt"></i><a href="tel:0620304050"> 06 20 30 40 50</a> <br/>
                            <i class="fa-solid fa-envelope"></i><a href="mailto:john.doe@gmail.com">john.doe@gmail.com</a>
                        </address>
                       </div>
                    </div>
                 </div>
                  <div class="accordion-item">
                   <h2 class="accordion-header" id="panelsStayOpen-headingTwo"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">Hébergeur</button></h2>
                   <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                     <div class="accordion-body">
                      <h3>Always Data</h3>
                      <p>91 rue du Faubourg Saint Honoré <br /> 75008 Paris</p>
                      <i class="fa-solid fa-globe"></i> <a href="https://www.alwaysdata.com/fr/" target="_blank">www.alwaysdata.com </a> 
                     </div>
                   </div>
                 </div>
                 <div class="accordion-item">
                   <h2 class="accordion-header" id="panelsStayOpen-headingThree"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">Crédits</button></h2>
                   <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                     <div class="accordion-body">
                      <h3>Crédits</h3>
                      <p>Site développé par John De, étudiant du CEF. <br />Les images libres de droit sont issues du site <a href="https://pixabay.com/fr/" target="_blank">Pixabay.</a> </p>          
                     </div>
                   </div>
                 </div>
                <div>
                <div class="accordion-item">
                   <h2 class="accordion-header" id="panelsStayOpen-headingFour"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">Profil Github</button></h2>
                   <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
                     <div class="accordion-body">
                      <h3>Profil Github</h3>
                      <img src="" alt="" />
                      <p>{users.map(user => (<img src={user.owner.avatar_url} style={{width:'100px'}} alt="image-avatar" />))}</p>
                      <p>Login: {users.map(user => (<p>{user.owner.login}</p>))}</p>
                      <p>ID: {users.map(user => (<p>{user.owner.id}</p>))}</p>
                      <p>Adresse Github :<a href="https://github.com/github-john-doe" target="_blank"><p>{users.map(user => (<p>{user.owner.html_url}</p>))}</p>  </a></p> 
                     </div>
                   </div>
                 </div>
                </div>
               </div>
              </div>
            </section>
        </main>

  )
}


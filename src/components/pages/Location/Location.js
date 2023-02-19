import React from "react"
import "../Location/Location.css"
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import DivHome from "../DivHome/DivHome"
const Location = () => {
  return (
    <>
      <section className='& az'>
        <div className="paragraphe">
        <h1>Une expérience <span className="Exper"> client unique</span></h1>
        <p>CityGo vous assure un service innovateur, unique et pointu qui s'adapte à tous vos besoins.<br/>
Flexibilité, modernité et personnalisation du service sont toujours au rendez-vous.</p>            
        </div>


          <Box className='boxing' > 
              <div className='box-photo'>
                 <div className='overlay'>
                  <h4 className='txt'>Transferts</h4>
                </div>
                <img src="https://www.citygo.tn/assets/img/service1-min.webp" alt='' className='photo' />

              </div>

              <div className='box-photo' >
                <div className='overlay'><h4 className='txt'>Business Rentals</h4></div>  
                <img src="https://www.citygo.tn/assets/img/service2-min.webp" alt='' className='photo'/>
                    
              </div>


            <div className='box-photo'>
                 <div className='overlay'>
                  <h4 className='txt'>Voitures avec chauffeur</h4>
                </div>             
                <img src="https://www.citygo.tn/assets/img/service3-min.webp" alt='' className='photo'/>

              </div>
              
          </Box>


      </section>
    </>
  )
}

export default Location

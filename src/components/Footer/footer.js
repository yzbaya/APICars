/* eslint-disable jsx-a11y/anchor-is-valid */
 import React from "react";
import { FaHome, FaPhone, FaEnvelope, FaPrint} from 'react-icons/fa'

function Footer(){
return(
  <div className='containerF' >
    <div className='row py-5'>
      <div className='col-md-4 col-sm-12'>
            <h4><span>A</span>props</h4>
            <p>CityGo est une agence de location de voitures en Tunisie qui met à votre disposition un large choix de véhicules au meilleur prix avec des offres flexibles qui s'adaptent à tous vos besoins.</p>
      </div>
      <div className=''>
          <h4><span>S</span>ociété</h4>
          <a href="">Conditions d'annulation</a><br/>
         <br/><h4><span>S</span>ervices client</h4>
          <a href="">Contact</a><br/>
          <a href="">Agences</a> <br/>
          <a href="">Espace client</a>         

      </div>
    <div className='col-md-4 col-sm-12'>
      <h4><span>N</span>os Contact</h4>
      <FaHome/> Avenue Abdelhamid El Kadhi, Z1 La Corniche Sousse 4000<br/>
      <FaEnvelope/> contact@citygo.tn<br/>
      <FaPrint/> +216 36 290 000<br/>
      <FaPhone/> Tunisie: +216 53 168 168<br/>
      <FaPhone/> France: +336 28 962 689
    </div>
    </div>
    < div className="apropos1">© 2023 Tous droits réservés. CityGo.tn. Powered BY Booster BC</div> 
  </div>
)
    
  
  
}
export default Footer;





// import "../Footer/footer.css";
// import React from "react";
// import styled from "styled-components";
// import { BsLinkedin, BsFacebook } from "react-icons/bs";
// import { AiFillInstagram } from "react-icons/ai";
// export default function Footer() {
//   return (
//     <FooterContainer className="footer-container" >
        
//          <div className="apropos">
//         <span>A</span>propros</div>
//        <div className="apropos">
//       <p>CityGo est une agence de location de voitures en Tunisie qui met à votre disposition un large choix de véhicules au meilleur prix avec des offres flexibles qui s'adaptent à tous vos besoins.</p>  
//       </div>
      
//     <br/>

//     <div className="position">
//        <div className="apropos"><span>S</span>ociété</div>
//         <a href="//" className="apropos">Conditions d'annulation</a>
//      </div>      
//    <br/>

//        <div className="apropos"><span>S</span>ervices client</div>
//         <a href="//" className="apropos">Contact</a>    
         
//         <a href="//" className="apropos">Agences</a>  
          
//         <a href="//" className="apropos">Espace client</a> <br/> 
//       <ul className="social__links">
//         <b>Suivez-nous</b>
//         <li>
//           <BsFacebook />
//         </li>
//         <li>
//           <AiFillInstagram />
//         </li>
//         <li>
//           <BsLinkedin />
//         </li>
        
//       </ul>

// < div className="apropos1">© 2023 Tous droits réservés. CityGo.tn. Powered BY Booster BC</div> 
      
       
//     </FooterContainer>
    
//   );
// }

// const FooterContainer = styled.footer`
//   display: flex;
//   justify-content: space-evenly;
//   background-color: black;
//   border-radius: 0.5rem;
//   padding: 2.5rem;
//   flex-direction: column;
//   ul {
//     display: flex;
//     list-style-type: none;
//     gap: 1rem;
//     border-radius: 0.5rem;
//     li {
      
//       a {
//         text-decoration: none;
//         color: black;
//         transition: 0.3s ease-in-out;
//         &:hover {
//           color: #302ce9;
//         } 
//       }
//       svg {
//         font-size: 1.3rem;
//         transition: 0.3s ease-in-out;
//         &:hover {
//           color: #302ce9;
//         }
//       }
//     }
//   }
//   @media screen and (min-width: 280px) and (max-width: 1024px) {
//     flex-direction: column;
//     gap: 2rem;
//     ul {
//       flex-direction: column;
//     }
//     .social__links {
//       flex-direction: row;
//     }
//   }
// `;
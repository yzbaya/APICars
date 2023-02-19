import React from 'react'
import '../DivHome/DivHome.css'
 const DivHome = () => {
  return (
    <div>
        <section className='div'>
            <div className='paragraphe1'>
                Nos Aventages
                <h2>Pourquoi choisir citygo?</h2>
            </div>
            
            <div className='row'>
              <div className='col-md-3 col-6 animated fadeIn text-center  border-right'>
                <img src="https://www.citygo.tn/assets/img/cartewhite.png" alt="" />
                <p>12 points de vente présents sur toute la cote tunisienne</p>
              </div>
              <div className='col-md-3 col-6 animated fadeIn text-center  border-right'>
                <img src="https://www.citygo.tn/assets/img/handshakewhite.png" alt=""/>
                <p>Un partenariat avec l’agence de voyage Tunisie promo   </p>
              </div>
              <div className='col-md-3 col-6 animated fadeIn text-center  border-right'>
                <img src="https://www.citygo.tn/assets/img/pricingwhite.png" alt=""/>
                <p> Un excellent rapport qualité/prix   </p>
              </div>
              <div className='col-md-3 col-6 animated fadeIn text-center '>
                <img src="https://www.citygo.tn/assets/img/customer-servicewhite.png" alt=""/>
                <p> Services Client   </p>
              </div>
            </div>
        </section>
    </div>
  )
}
export default DivHome;
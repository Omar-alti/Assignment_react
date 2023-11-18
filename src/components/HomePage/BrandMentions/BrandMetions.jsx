import React from 'react'
import Paperz from '../../../assets/images/paperz.svg'
import Dorfus from '../../../assets/images/dorfus.svg'
import Martino from '../../../assets/images/martino.svg'
import Square from '../../../assets/images/square.svg'
import Gobona from '../../../assets/images/gobona.svg'

const BrandMetions = () => {
  return (
  <section className="brands-section">
       <div className="container">
        <img src={Paperz} alt="picture of paperz brand logo"/>
        <img src={Dorfus} alt="picture of dorfus brand logo"/>
        <img src={Martino} alt="picture of martino's brand logo"/>
        <img src={Square} alt="picture of square's logo"/>
        <img src={Gobona} alt="picture of gobona's brand logo"/>
       </div>
 </section>
  )
}

export default BrandMetions

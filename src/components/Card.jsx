import CardInfo from './CardInfo';
import {Routes, Route, useNavigate, Link} from 'react-router-dom';
import React from 'react'
import ('./Card.css')
const Card = ({card}) => {
  const navigate = useNavigate();
  const cardInfoPage = ()=>{
    console.log('slam');
    <Link />
  }
    // console.log(card)
    return (
   <Link  to ={`/cardinfo/${card.name.official}`} >
   <div onClick={cardInfoPage}  className='card'>
        <div className='card_top'>
          <img src = {`${card.flags.png}`} />
        </div>
        <div id="cardBottom" className='card_bottom' >
          <h5>{card.name.official}</h5>
          <h6>Population: <span>{card.population}</span></h6>
          <h6>Region: <span>{card.region}</span></h6>
          <h6>Region: <span>{card.capital}</span></h6>
        </div>
      </div>
      <Routes>
        <Route path = "./CardInfo" element ={<CardInfo/>}/>
      </Routes>
   </Link>
      
    )
  }
  
  export default Card
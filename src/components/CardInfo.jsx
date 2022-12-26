
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
// import Navbar from '../components/Navbar'
import '../components/CardInfo.css'

import axios from 'axios'
// import { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'

function CardInfo() {
   const {name} = useParams();
   const [showDetails,setShowDetails] = useState([])
   const [loading,setLoading] = useState(true)

   useEffect(()=>{
    axios.get(`https://restcountries.com/v3.1/name/${name}`).then((res)=>{
      setShowDetails(res.data)
      setLoading(false)

    })
   },[])

  return (
    <>
    {
          loading?(<div className="spinner-border" role="status">
          <span className="sr-only"></span>
        </div>):( showDetails.map((prod)=>{
      return(
        <>
        
     
        <div className='button_div'>
       
       <Link to="/"><button className='back'><i class="fa-solid fa-arrow-left"></i>Back</button></Link>
       </div>
       <div className='country_body'>
         <div className="country_body_left">
           <img src={prod.flags.svg}  alt = ""/>
         </div>
         <div className="country_body_right">
          <h2>{prod.name.common}</h2>
          <div className='right_body'>
          <div className="country_body_right_l">
           <div><span>Native Name:</span> <span>{prod.name.common}</span></div>
           <div><span>Population:</span> <span> {prod.population}</span></div>
           <div><span>Region:</span> <span> {prod.region}</span></div>
           <div><span>Sub Region:</span> <span>{prod.subregion}</span></div>
           <div><span>Capital:</span> <span>{prod.capital}</span></div>
          
          </div>
          <div className="country_body_right_r">
           <div><span>Top Level Domain:</span></div>
           <div><span>Currencies:</span><span>salam</span></div>
           <div><span>Languages:</span><span>salam</span></div>
          </div>
          </div>
          <p>Border:
             <span>{prod.borders[0]}</span><span>{prod.borders[1]}</span><span>{prod.borders[2]}</span><span>{prod.borders[3]}</span><span>{prod.borders[4]}</span><span>{prod.borders[5]}</span></p>
         </div>
       </div></>
      )
     }))
        }
     
    
 
    </>
  )
}

export default CardInfo
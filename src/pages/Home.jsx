import React, { useEffect, useState } from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom';

// import Footer from '../components/Footer'
import Card from '../components/Card'
import CardInfo from '../components/CardInfo'
import axios from 'axios'
import './Home.css'
const Home = () => {
    const navigate = useNavigate();
    const cardInfoPage = (cardInfo)=>{
   navigate('./CardInfo');
    }

    const [data,setData] = useState([])
    console.log(data);
    const [loading,setLoading] = useState(true)
   useEffect(()=>{
    axios
    .get('https://restcountries.com/v3.1/all').then((response) => {
        setData(response.data)
        setLoading(false)
        // console.log(response.data)
    })
   },[])

  return (
    <>
   <div className='fltr_search'>
   <div className='inp_filter' >
        <div className="inp_filter_serach">
        <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder='Search for country..'/>
          
        </div>

    </div>

   <div id="dropdown">
                        <button id='btn' class="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown button
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" >Africa</a></li>
                            <li><a className="dropdown-item" >Americas</a></li>
                            <li><a className="dropdown-item" >Asia</a></li>
                            <li><a className="dropdown-item" >Europe</a></li>
                            <li><a className="dropdown-item" >Oceania</a></li>
                        </ul>
                    </div>
   </div>
   
    <div className='container'>
    { loading ? (<div className="spinner-border" role="status">
          <span className="sr-only"></span>
        </div>):(
            data.map((cardData)=>{
                return <Card key={cardData.id} card ={cardData}
                
                
                />
            })
        )

        }
 </div>
    
    <Routes>
        <Route path = "./CardInfo" element ={<CardInfo/>}/>
      </Routes>
     </>
  )
}

export default Home
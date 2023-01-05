import React, { useEffect, useState } from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom';
import '../components/loader.css'
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
    const [input,setInput] = useState('');
    const handleChange = (event)=>{
        setInput(event.target.value)
        console.log(event.target.value)
        console.log(input);
     }
    const [data,setData] = useState([])
    console.log(data);

    const [region,setRegion] = useState('All')
    const [loading,setLoading] = useState(true)
   useEffect(()=>{
    axios
    .get('https://restcountries.com/v3.1/all').then((response) => {
        setData(response.data)
        setLoading(false)
        // console.log(response.data)
        // console.log("buradan tap "+ data);
        // console.log("buradan tap "+ data);
        // console.log("buradan tap "+ data);
    })
   },[])

  return (
    <>
   <div className='fltr_search'>

   <div className='inp_filter' >
        <div className="inp_filter_serach">
        <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" value={input} onChange={handleChange} placeholder='Search for country..'/>
          
        </div>

    </div>

                        <select className="dropdown" onChange={event=> setRegion(event.target.value)} name='regions' id='regions'>
                            <option value='All'>All</option>
                            <option value='Africa'>All</option>
                            <option value='Americas'>Americas</option>
                            <option value='Asia'>Asia</option>
                            <option value='Europe'>Europe</option>
                            <option value='Oceania'>Oceania</option>
                        </select>
                        
                    </div>
 
   
    <div className='container'>
    { loading ? (<div className='loader_body'><span class="loader"></span></div>):(
            data.filter((item)=>{
                if(input === ''){
                    return item
                }else if(item.name.common.toLowerCase().includes(input.toLowerCase())){
                    return item
                }
            })
            .filter((item)=>{
                if(region == 'All'){
                    return item;
                }
                else if(item.region == region){
                    return item.region
                }
            })
            .map((cardData)=>{
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
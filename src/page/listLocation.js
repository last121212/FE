import React, { useEffect, useState } from 'react';
import axios from 'axios'
import {  useNavigate } from 'react-router-dom';

const ListLocation = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/');
  };
  const handleButtonClick2 = () => {
    navigate('/add-location');
  };
    const[location,setLocation]=useState()
    useEffect(()=>{
        axios.get("/location/findall").then(response =>{
            setLocation(response.data)
            console.log(response.data)
        })
    },[])
  return (
    <div>
 <div>
      {location!=null && Object.keys(location).map((city) => (
        <div key={city}>
          <h2>{city}</h2>
          <ul>
            {location[city].map((place, index) => (
              <li key={index}>{place}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <button onClick={handleButtonClick}>Ana Sayfa</button>
      <button onClick={handleButtonClick2}>Şehir ve İlçe Ekle</button>
    </div>
  )
}
export default ListLocation
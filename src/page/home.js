import React from 'react'
import {  useNavigate } from 'react-router-dom';



const Home = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/add-location');
      };
      const handleButtonClick2 = () => {
        navigate('/list-location');
      };
  return (
    <div>
        <h1>lorem</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <button onClick={handleButtonClick}>Şehir ve İlçe Ekle</button>
        <button onClick={handleButtonClick2}>Şehir ve İlçeleri Görüntüle</button>
    </div>
  )
}

export default Home
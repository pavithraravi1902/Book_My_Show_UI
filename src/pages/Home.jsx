import React, { useState } from 'react';
import ImageCarousel from './ImageCarousel';
import Header from '../layout/Header';
import TheatreList from './TheatreList';

const Home = () => {
  const [city, setCity] = useState('');

  return (
    <div>
      <Header city={city} setCity={setCity} />
     {city === '' ? (
  <ImageCarousel />
) : (
  <div style={{ textAlign: 'center', marginTop: '50px', fontSize: '24px', fontWeight: 'bold' }}>
   <TheatreList city={city}/>
  </div>
)}
    </div>
  );
};

export default Home;

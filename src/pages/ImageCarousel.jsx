import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import ImaikaNodigal from '../Images/Imaika-Nodigal.jpg';
import Leo from '../Images/Leo.jpg';
import Vikram from '../Images/Vikram-KamalHaasan.jpg';
import Master from '../Images/master.jpg';
import DilBechara from '../Images/DilBechara.jpg';
import Frozen from '../Images/Frozen-II.jpg';
import Galaxy from '../Images/Galaxy.jpg';

const ImageCarousel = () => {
  const images = [ImaikaNodigal, Leo, Vikram, Master, DilBechara, Frozen, Galaxy];

  const imageArray = (arr, size) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };

  const imageChunks = imageArray(images, 6);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <Slider {...settings}>
      {imageChunks.map((chunk, index) => (
        <div key={index}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
            {chunk.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`slide-${index * 6 + i}`}
                style={{
                  width: '30%',         
                  height: '300px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)'
                }}
              />
            ))}
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default ImageCarousel;

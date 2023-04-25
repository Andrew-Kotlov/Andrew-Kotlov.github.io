/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Carousel } from 'react-carousel-minimal';
import img from './img.jpg';
import Style from './Slider.module.css';

export default function Slider() {
  const data = [
    {
      image: img,
    },
    {
      image: img,
    },
    {
      image: img,
    },
  ];
  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  };
  return (
    <div className={Style.slider_container}>
      <div className={Style.slider_wrapper}>
        <Carousel
          data={data}
          time={3500}
          width="100%"
          height="100%"
          captionStyle={captionStyle}
          captionPosition="bottom"
          automatic
          dots
          pauseIconColor="white"
          pauseIconSize="40px"
          slideBackgroundColor="darkgrey"
          slideImageFit="cover"
          style={{
            cursor: 'pointer',
          }}
        />
      </div>
    </div>
  );
}

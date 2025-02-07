'use client'

import styles from './ofertasCarrossel.module.css';
import React from 'react';
import Slider from 'react-slick';
import OfertasItem from './ofertasItem';

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image';
import { Game } from '@/actions/gameInfo-get';


export default function OfertasCarrossel({ items }: { items: Game[] }) {
  const [sliderRef, setSliderRef] = React.useState(null);

  const sliderSettings = {
    // arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
  }

  function SampleNextArrow({ className, style, onClick }: { className: string }) {
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }

  return (
    <div className="container">
      <h1 className={styles.title}>OFERTAS</h1>
      <Slider {...sliderSettings}>
        {items.map((item, index) => (
          <div key={index}>
            <OfertasItem content={item} index={index} />
          </div>
        ))}
        <div>
          <h1>Veja Mais.</h1>
        </div>
      </Slider>
    </div>
  );
}

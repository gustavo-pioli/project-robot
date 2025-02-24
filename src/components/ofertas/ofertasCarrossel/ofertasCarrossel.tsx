'use client';

import styles from './ofertasCarrossel.module.css';
import React from 'react';
import Slider from 'react-slick';
import OfertasItem from '../ofertasItem/ofertasItem';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Game } from '@/api/gameInfo-get';
import { NextArrow, PrevArrow } from '../arrows/arrows';
import Dots from '../dots/dots';

export default function OfertasCarrossel({ items }: { items: Game[] }) {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const sliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dots: true,
    // dots: false,
    appendDots: (dots: React.ReactNode) => <Dots dots={dots} />,
    beforeChange: (current: number, next: number) => setActiveIndex(next),
  };
  console.log(
    `${items.map((item, index) => {
      return `${index}: ${JSON.stringify(item.name)}`;
    })}`,
  );
  return (
    <div className="container">
      <h1 className={styles.title}>OFERTAS</h1>
      <Slider className={styles.sliderContainer} {...sliderSettings}>
        {items.map((item, index) => (
          <div key={index}>
            <OfertasItem
              content={item}
              index={index}
              isActive={index === activeIndex}
            />
          </div>
        ))}
        <div className={styles.vejaMaisContainer}>
          <div className={styles.vejaMais}>
            <button>Veja Mais</button>
          </div>
        </div>
      </Slider>
    </div>
  );
}

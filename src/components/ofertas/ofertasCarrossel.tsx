'use client'

import styles from './ofertasCarrossel.module.css';
import { SpecialItem } from '@/actions/ofertas-get';
import React from 'react';
import Slider from 'react-slick';
import OfertasItem from './ofertasItem';

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image';


export default function OfertasCarrossel({ specialItems }: { specialItems: SpecialItem[] }) {
  const [sliderRef, setSliderRef] = React.useState(null);

  const sliderSettings = {
    // arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
  }


  return (
    <div className="container">
      <h1 className={styles.title}>OFERTAS</h1>
      <Slider {...sliderSettings}>
        {specialItems.map((item, index) => (
          <div key={index} className={styles.carrosselConteudo}>
            <Image
              src={item.large_capsule_image}
              alt="Banner"
              width={616}
              height={353}
            />
            <div className={styles.descricao}>
              <Image
                src={item.small_capsule_image}
                alt="Banner"
                width={184}
                height={69}
              />
              <p>Muito texto</p>
            </div>
          </div>
          // <OfertasItem specialItem={item} index={index} />
        ))}
      </Slider>
    </div>
  );
}

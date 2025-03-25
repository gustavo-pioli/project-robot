'use client';

import styles from './ofertasCarrossel.module.css';
import React from 'react';
import Slider from 'react-slick';
import OfertasItem from '../ofertasItem/ofertasItem';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NextArrow, PrevArrow } from '../arrows/arrows';
import Dots from '../dots/dots';
import LoadingError from '@/components/Error/loadingError';
import useFetch from '@/hooks/useFetch';
import { Game, SpecialResponse } from '@/services/types';
import useMedia from '@/hooks/useMedia';
import { useTranslation } from 'react-i18next';

export default function OfertasCarrossel() {
  const { t } = useTranslation();
  const { loading, error, request } = useFetch();
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [appids, setAppIds] = React.useState<number[]>([]);
  const [items, setItems] = React.useState<Game[] | null>(null);
  const [videoLoaded, setVideoLoaded] = React.useState(false);
  const mobile = useMedia('(max-width: 26rem)');

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  React.useEffect(() => {
    async function fetchIds() {
      const url = '/api/ofertas';
      const { response } = await request(url);
      const json = response?.data as SpecialResponse;
      const appids = json ? json.specials?.items.map((item) => item.id) : [];
      setAppIds(appids);
    }
    fetchIds();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    async function fetchOfertas(ids: number[]) {
      const list = ids?.map((id: number) => `/api/game/${id}`);
      const info = [];
      const numOfertas = 3;

      let index = 0;
      while (info.length < numOfertas && index < list.length) {
        const url = list[index];
        const { response, error: errorMessage } = await request(url);
        const json = response?.data;
        if (!errorMessage && json[ids[index]]?.success) {
          info.push(json[ids[index]].data);
        }
        index++;
      }
      setItems(info);
    }
    fetchOfertas(appids);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appids]);

  const sliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: !mobile,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dots: true,
    appendDots: (dots: React.ReactNode) => <Dots dots={dots} />,
    beforeChange: (current: number, next: number) => setActiveIndex(next),
  };
  return (
    <div className="container">
      <h1 className={styles.title}>{t('deals.title').toLocaleUpperCase()}</h1>
      <div className={styles.carousel}>
        {(loading || !items || !videoLoaded) && !error ? (
          <div className={styles.skeleton}></div>
        ) : null}
        {(!loading && (items === undefined || null)) || error ? (
          <LoadingError />
        ) : (
          ''
        )}
        {items && items.length > 0 ? (
          <Slider className={styles.sliderContainer} {...sliderSettings}>
            {items.map((item, index) => (
              <div key={index}>
                <OfertasItem
                  content={item}
                  index={index}
                  isActive={index === activeIndex}
                  onLoad={handleVideoLoad}
                />
              </div>
            ))}
            <div className={styles.vejaMaisContainer}>
              <div className={styles.vejaMais}>
                <button>Veja Mais</button>
              </div>
            </div>
          </Slider>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

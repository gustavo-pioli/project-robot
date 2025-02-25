import Image from 'next/image';
import styles from './ofertasItem.module.css';
import { Game } from '@/api/gameInfo-get';
import Preco from '../preco/preco';
import Tags from '../tags/tags';
import React from 'react';

export default function OfertasItem({
  content,
  index,
  isActive,
}: {
  content: Game;
  index: number;
  isActive: boolean;
}) {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.currentTime = 0;
    }
  }, [isActive]);
  return (
    <div key={index} className={styles.carrosselConteudo}>
      <div className={styles.visualHolder}>
        {content?.movies?.length ? (
          <video
            ref={videoRef}
            // width={816}
            // height={459}
            controls
            autoPlay
            muted
          >
            <source src={content.movies[0].webm[480]} type="video/mp4" />
          </video>
        ) : (
          <Image
            className={styles.placeHolder}
            src={content.screenshots[0].path_full}
            alt="Banner"
            fill
            // width={616}
            // height={441}
          />
        )}
      </div>
      <div className={styles.descricao}>
        <Image
          className={styles.banner}
          src={content.header_image}
          alt="Banner"
          width={460}
          height={215}
        />
        <div className={styles.tagContainer}>
          <Tags content={content.genres} />
        </div>
        <p>{content.short_description}</p>
        <div className={styles.precoContainer}>
          <Preco
            discount={content.price_overview.discount_percent}
            initial={content.price_overview.initial_formatted}
            final={content.price_overview.final_formatted}
          />
        </div>
      </div>
    </div>
  );
}

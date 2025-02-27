import Image from 'next/image';
import styles from './ofertasItem.module.css';
import Preco from '../preco/preco';
import Tags from '../tags/tags';
import React from 'react';
import { Game } from '@/services/types';

export default function OfertasItem({
  content,
  index,
  isActive,
  onLoad,
}: {
  content: Game;
  index: number;
  isActive: boolean;
  onLoad: () => void;
}) {
  const [skeleton, setSkeleton] = React.useState(true);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  function handleLoad(img: HTMLImageElement) {
    setSkeleton(false);
    img.style.opacity = '1';
  }

  function handleVideoLoad(event: React.SyntheticEvent<HTMLVideoElement>) {
    setSkeleton(false);
    onLoad();
    event.currentTarget.style.opacity = '1';
  }

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.currentTime = 0;
    }
  }, [isActive]);
  return (
    <div key={index} className={styles.carrosselConteudo}>
      <div className={styles.visualHolder}>
        {skeleton && <div className={styles.skeleton}> </div>}
        {content?.movies?.length ? (
          <video
            ref={videoRef}
            // width={816}
            // height={459}
            controls
            autoPlay
            muted
            onLoadedData={handleVideoLoad}
          >
            <source src={content.movies[0].webm[480]} type="video/mp4" />
          </video>
        ) : (
          <Image
            className={styles.placeHolder}
            src={content.screenshots[0].path_full}
            alt="Banner"
            fill
            onLoadingComplete={handleLoad}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 616px"
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
          style={{ width: 'auto', height: 'auto' }} // TODO
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

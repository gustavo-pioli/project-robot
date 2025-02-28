import Image from 'next/image';
import styles from './card.module.css';
import Preco from '@/components/ofertas/preco/preco';
import React from 'react';
import { PriceOverview } from '@/services/types';
import useFetch from '@/hooks/useFetch';

export default function Card({
  appId,
  preco,
  mobile,
}: {
  appId: string;
  preco: PriceOverview;
  mobile: boolean;
}) {
  const { request } = useFetch();
  const [imageUrl, setImageUrl] = React.useState<string | null>(null);
  const [skeleton, setSkeleton] = React.useState(true);

  function handleLoad(event: React.SyntheticEvent<HTMLImageElement>) {
    setSkeleton(false);
    event.currentTarget.style.opacity = '1';
  }

  React.useEffect(() => {
    async function checkImage() {
      const url = `api/imagem/${appId}`;
      const { response } = await request(url);
      const json = response?.data;
      if (json) setImageUrl(json.imageUrl);
    }
    checkImage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`${styles.cardContainer}`}>
      <div className={styles.imageHolder}>
        {skeleton && <div className={styles.skeleton}> </div>}
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt="Jogo Popular"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 616px"
            onLoad={handleLoad}
            priority
          />
        ) : (
          !skeleton && <p>Imagem nao disponível</p>
        )}
      </div>
      <div className={styles.precoContainer}>
        {preco ? (
          <Preco
            discount={preco.discount_percent}
            initial={preco.initial_formatted}
            final={preco.final_formatted}
            mobile={mobile}
          />
        ) : (
          <Preco mobile={mobile} />
        )}
      </div>
    </div>
  );
}

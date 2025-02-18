import { PriceOverview } from '@/api/preco-get';
import Image from 'next/image';
import styles from './card.module.css';
import Preco from '@/components/ofertas/preco/preco';
import { FindImage } from '@/functions/find';
import React from 'react';

export default async function Card({
  appId,
  preco,
}: {
  appId: string;
  preco: PriceOverview;
}) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageHolder}>
        <Image
          src={await FindImage(appId)}
          alt="Jogo Popular"
          fill
          // width={616}
          // height={353}
        />
      </div>
      <div className={styles.precoContainer}>
        {preco ? (
          <Preco
            discount={preco.discount_percent}
            initial={preco.initial_formatted}
            final={preco.final_formatted}
          />
        ) : (
          <Preco />
        )}
      </div>
    </div>
  );
}

import React from 'react';
import styles from './preco.module.css';
import useMedia from '@/hooks/useMedia';

type PrecoType = {
  discount?: number;
  initial?: string;
  final?: string;
};
type PrecoProps = PrecoType & { mobile?: boolean | null };

export default function Preco({
  discount = 0,
  initial,
  final,
  mobile,
}: PrecoProps) {
  const isFree = !final;
  if (useMedia('(max-width: 26rem)')) mobile = true;
  return isFree ? (
    <div
      className={`${mobile ? styles.mobileContainer : styles.precoContainer}`}
    >
      <div className={styles.preco}>Gratuito para jogar</div>
    </div>
  ) : (
    <div
      className={`${mobile ? styles.mobileContainer : styles.precoContainer}`}
    >
      {discount ? (
        <>
          <p className={styles.desconto}>{`-${discount}%`}</p>
          <div className={styles.precoDesc}>
            <p>{initial}</p>
            <p>{final}</p>
          </div>
        </>
      ) : (
        <div className={styles.preco}>{final}</div>
      )}
    </div>
  );
}

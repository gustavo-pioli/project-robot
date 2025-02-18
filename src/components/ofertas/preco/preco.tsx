import React from 'react';
import styles from './preco.module.css';

type PrecoType = {
  discount?: number;
  initial?: string;
  final?: string;
};
export default function Preco({ discount = 0, initial, final }: PrecoType) {
  const isFree = !final;

  return isFree ? (
    <div className={styles.precoContainer}>
      <div className={styles.preco}>Gratuito para jogar</div>
    </div>
  ) : (
    <div className={styles.precoContainer}>
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

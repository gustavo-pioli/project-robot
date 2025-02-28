'use client';
import Image from 'next/image';
import styles from './footer.module.css';
import useMedia from '@/hooks/useMedia';

export default function Footer() {
  const mobile = useMedia('(max-width: 26rem)');
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <hr />
        {mobile ? (
          <div className={styles.footerContent}>
            <p>@ 2025 Robot Corporation. Todos os direitos reservados</p>
            <h1>ROBOT</h1>
          </div>
        ) : (
          <div className={styles.footerContent}>
            <h1>ROBOT</h1>
            <p>@ 2025 Robot Corporation. Todos os direitos reservados</p>
            <Image src="/assets/robot.svg" alt="Robot" width={74} height={74} />
          </div>
        )}
        <hr />
      </div>
    </footer>
  );
}

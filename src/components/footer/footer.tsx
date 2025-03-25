'use client';
import Image from 'next/image';
import styles from './footer.module.css';
import useMedia from '@/hooks/useMedia';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  const mobile = useMedia('(max-width: 26rem)');
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <hr />
        {mobile ? (
          <div className={styles.footerContent}>
            <p>{t('footer.description')}</p>
            <h1>ROBOT</h1>
          </div>
        ) : (
          <div className={styles.footerContent}>
            <h1>ROBOT</h1>
            <p>{t('footer.description')}</p>
            <Image src="/assets/robot.svg" alt="Robot" width={74} height={74} />
          </div>
        )}
        <hr />
      </div>
    </footer>
  );
}

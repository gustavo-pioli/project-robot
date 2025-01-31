import Image from 'next/image';
import styles from './footer.module.css';

export default async function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <hr />
        <div className={styles.footerContent}>
          <h1>ROBOT</h1>
          <p>@ 2025 Robot Corporation. Todos os direitos reservados</p>
          <Image src="/assets/robot.svg" alt="Robot" width={74} height={74} />
        </div>
        <hr />
      </div>
    </footer>
  );
}

import Link from 'next/link';
import styles from './header.module.css';
// import Image from 'next/image';

export default async function Header() {
  return (
    <header className={styles.header}>
      <nav className={`container ${styles.nav}`}>
        <Link className={styles.logo} href={'/'}>
          ROBOT
        </Link>
        <div className={styles.headerMenu}>
          <Link href={'/'}>LOJA</Link>
          <Link href={'/'}>SOBRE</Link>
          <Link href={'/'}>SUPORTE</Link>
        </div>
        <div className={styles.login}>
          <Link href={'/'}>Iniciar Sessão</Link>
        </div>
      </nav>
    </header>
  );
}

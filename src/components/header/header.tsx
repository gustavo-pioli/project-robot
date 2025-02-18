'use client';
import Link from 'next/link';
import styles from './header.module.css';
import { usePathname } from 'next/navigation';
// import Image from 'next/image';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <nav className={`container ${styles.nav}`}>
        <Link className={styles.logo} href={'/'}>
          ROBOT
        </Link>
        <div className={styles.headerMenu}>
          <Link href={'/'} className={pathname === '/' ? 'active' : ''}>
            HOME
          </Link>
          <Link href={'/'} className={pathname === '/loja' ? 'active' : ''}>
            LOJA
          </Link>
          <Link href={'/'} className={pathname === '/sobre' ? 'active' : ''}>
            SOBRE
          </Link>
          <Link href={'/'} className={pathname === '/suporte' ? 'active' : ''}>
            SUPORTE
          </Link>
        </div>
        <div className={styles.login}>
          <Link href={'/'} className={pathname === '/login' ? 'active' : ''}>
            Iniciar Sessão
          </Link>
        </div>
      </nav>
    </header>
  );
}

'use client';
import Link from 'next/link';
import styles from './header.module.css';
import { usePathname } from 'next/navigation';
import useMedia from '@/hooks/useMedia';
import React from 'react';
import '@/app/config/i18n.config';

import { useTranslation } from 'react-i18next';

export default function Header() {
  const { t } = useTranslation();
  const pathname = usePathname();
  const mobile = useMedia('(max-width: 26rem)');
  const [mobileMenu, setMobileMenu] = React.useState(false);
  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav}`}>
        <p className={styles.logo}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="74"
            height="74"
            viewBox="0 0 74 74"
            fill="none"
          >
            <g filter="url(#filter0_d_24_85)">
              <path
                d="M55.5 27.75H18.5C11.6885 27.75 6.16666 33.2718 6.16666 40.0833V58.5833C6.16666 65.3948 11.6885 70.9167 18.5 70.9167H55.5C62.3115 70.9167 67.8333 65.3948 67.8333 58.5833V40.0833C67.8333 33.2718 62.3115 27.75 55.5 27.75Z"
                stroke="#742AFC"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M37 15.4167C40.4057 15.4167 43.1666 12.6558 43.1666 9.25C43.1666 5.84424 40.4057 3.08333 37 3.08333C33.5942 3.08333 30.8333 5.84424 30.8333 9.25C30.8333 12.6558 33.5942 15.4167 37 15.4167Z"
                stroke="#742AFC"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M37 15.4167V27.75M27.75 52.4167V46.25M46.25 46.25V52.4167"
                stroke="#742AFC"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_24_85"
                x="-1.83334"
                y="-0.916672"
                width="77.6667"
                height="83.8333"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_24_85"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_24_85"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          ROBOT
        </p>
        {mobile && (
          <button
            className={`${styles.mobileButton} ${
              mobileMenu && styles.mobileButtonActive
            }`}
            onClick={() => setMobileMenu(!mobileMenu)}
          ></button>
        )}
        <div
          className={`${mobile ? styles.mobileMenu : styles.headerMenu} ${
            mobileMenu && styles.mobileMenuActive
          }`}
        >
          <Link href={'/'} className={pathname === '/' ? 'active' : ''}>
            {t('header.home').toLocaleUpperCase()}
          </Link>
          <Link href="/" className={pathname === '/loja' ? 'active' : ''}>
            {t('header.store').toLocaleUpperCase()}
          </Link>
          <Link href="/" className={pathname === '/sobre' ? 'active' : ''}>
            {t('header.about').toLocaleUpperCase()}
          </Link>
          <Link href="/" className={pathname === '/suporte' ? 'active' : ''}>
            {t('header.support').toLocaleUpperCase()}
          </Link>
          {mobile && (
            <Link href={'/'} className={pathname === '/login' ? 'active' : ''}>
              {t('header.login').toLocaleUpperCase()}
            </Link>
          )}
        </div>
        <div className={styles.login}>
          <Link href="/" className={pathname === '/login' ? 'active' : ''}>
            {t('header.login')}
          </Link>
        </div>
      </nav>
    </header>
  );
}

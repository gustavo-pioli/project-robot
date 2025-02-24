import React, { ReactNode } from 'react';
import styles from './dots.module.css';

interface DotsProps {
  dots: ReactNode;
}

export default function Dots({ dots }: DotsProps) {
  // React.useEffect();

  return (
    <div className={styles.dotsContainer}>
      <ul id="dots" className={styles.list}>
        {dots}
      </ul>
    </div>
  );
}
